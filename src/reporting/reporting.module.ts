import { Module } from '@nestjs/common';
import { ReportingService } from './reporting.service';
import { ReportingController } from './reporting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tables } from './Tables.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Tables])],
  providers: [ReportingService],
  controllers: [ReportingController]
})
export class ReportingModule {}
