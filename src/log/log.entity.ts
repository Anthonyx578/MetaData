import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('logs')
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  log_time: Date;

  @Column()
  timezone: string;

  @Column()
  process_id: number;

  @Column()
  log_level: string;

  @Column()
  message: string;
}