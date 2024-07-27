import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from './log.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as readline from 'readline';
import * as pdf from 'pdfkit';


@Injectable()
export class LogService {
    constructor(
        @InjectRepository(Log)
        private logsRepository: Repository<Log>,
      ) {}
      //encontrar todos los logs
      async findAll(): Promise<Log[]> {
        return this.logsRepository.find();
      }

      //encontrar logs por parametros
      async findWithFilter(column: string, value: any): Promise<Log[]> {
        const query = this.logsRepository.createQueryBuilder('log');
        query.andWhere(`log.${column} = :value`, { value });
        return query.getMany();
      }
      //Generar PDF
      async generatePDF(logs: Log[]): Promise<string> {
        const filePath = `./logs_${Date.now()}.pdf`;
        const doc = new pdf();
    
        doc.pipe(fs.createWriteStream(filePath));
        logs.forEach(log => {
          doc.text(JSON.stringify(log));
        });
        doc.end();
    
        return new Promise((resolve, reject) => {
          doc.on('finish', () => resolve(filePath));
          doc.on('error', reject);
        });
      }
      // Importar todos los logs a una tabla
      async importLogs(filePath: string): Promise<void> {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity,
        });
    
        for await (const line of rl) {
          const logData = this.parseLogLine(line);
          if (logData) {
            await this.logsRepository.save(logData);
          }
        }
      }
    
      private parseLogLine(line: string): Partial<Log> | null {
        // Ejemplo de línea de log:
        // 2024-07-21 15:31:51.750 -05 [19156] LOG:  el sistema de bases de datos fue apagado en 2024-07-21 15:31:50 -05
        const regex = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}) ([+-]\d{2}) \[(\d+)\] (\w+):\s+(.*)$/;
        const match = line.match(regex);
    
        if (!match) {
          return null; // Ignora líneas que no coinciden con el formato esperado
        }
    
        const [_, log_time, timezone, process_id, log_level, message] = match;
    
        return {
          log_time: new Date(log_time),
          timezone: timezone,
          process_id: parseInt(process_id, 10),
          log_level: log_level,
          message: message,
        };
      }
      /*async importLogs(filePath: string): Promise<void> {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity,
        });
    
        for await (const line of rl) {
          const logData = this.parseLogLine(line);
          if (logData) {
            await this.logsRepository.save(logData);
          }
        }
      }
    
      private parseLogLine(line: string): Partial<Log> | null {
        // Implementa la lógica para parsear cada línea del log y retornar un objeto Log
        // Ejemplo básico:
        const logParts = line.split(' ');
        return {
          log_time: new Date(logParts[0]),
          user_name: logParts[1],
          // Completa con el resto de los campos
        };
      }*/
}
