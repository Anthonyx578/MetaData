import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auditoria')
export class Auditoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nombre_usuario', type: 'varchar', length: 255 })
  nombreUsuario: string;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'time' })
  hora: string;

  @Column({ type: 'varchar', length: 255 })
  tabla: string;

  @Column({ type: 'varchar', length: 255 })
  accion: string;
}