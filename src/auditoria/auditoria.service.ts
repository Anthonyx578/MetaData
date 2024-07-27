import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auditoria } from './auditoria.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';


@Injectable()
export class AuditoriaService {
    constructor(
        @InjectRepository(Auditoria)
        private readonly auditoriaRepository: Repository<Auditoria>,
    ) { }

    async createTableIfNotExists(): Promise<void> {
        const queryRunner = this.auditoriaRepository.manager.connection.createQueryRunner();
        await queryRunner.connect();

        const tableExists = await queryRunner.hasTable('auditoria');
        if (!tableExists) {
            await queryRunner.query(`
            CREATE TABLE auditoria (
              id SERIAL PRIMARY KEY,
              nombre_usuario VARCHAR(255) NOT NULL,
              fecha DATE NOT NULL,
              hora TIME NOT NULL,
              tabla VARCHAR(255) NOT NULL,
              accion VARCHAR(255) NOT NULL
            )
          `);
        }
        await queryRunner.release();
    }

    async getTableNames(): Promise<string[]> {
        const queryRunner = this.auditoriaRepository.manager.connection.createQueryRunner();
        await queryRunner.connect();

        const tables = await queryRunner.query(`
          SELECT table_name
          FROM information_schema.tables
          WHERE table_schema = 'public'
        `);

        await queryRunner.release();
        return tables.map((table: { table_name: string }) => table.table_name);
    }

    async generateAndExecuteTriggers(): Promise<void> {
        const tableNames = await this.getTableNames();
        const triggersSQL = tableNames
        .filter(tableName => tableName !== 'auditoria') // Excluir la tabla auditoria
        .map(tableName => this.createTriggerSQL(tableName))
        .join('\n\n');
    
        // Guardar el SQL en un archivo
        fs.writeFileSync('triggers.sql', triggersSQL);
    
        // Ejecutar el SQL en la base de datos
        const queryRunner = this.auditoriaRepository.manager.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        try {
          await queryRunner.query(triggersSQL);
          await queryRunner.commitTransaction();
        } catch (error) {
          await queryRunner.rollbackTransaction();
          throw error;
        } finally {
          await queryRunner.release();
        }
      }
    
      createTriggerSQL(tableName: string): string {
        return `
          CREATE OR REPLACE FUNCTION audit_${tableName}_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, '${tableName}', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, '${tableName}', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, '${tableName}', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_${tableName}_trigger
          AFTER INSERT OR UPDATE OR DELETE ON ${tableName}
          FOR EACH ROW EXECUTE FUNCTION audit_${tableName}_changes();
        `;
      }
}
