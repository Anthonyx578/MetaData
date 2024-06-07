import { Module } from '@nestjs/common';
import { DataBaseBackService } from './data-base-back.service';
import { DataBaseBackController } from './data-base-back.controller';
import { execPromiseProvider } from 'src/Exec/Exec';

@Module({
  providers: [DataBaseBackService,execPromiseProvider],
  controllers: [DataBaseBackController]
})
export class DataBaseBackModule {}
