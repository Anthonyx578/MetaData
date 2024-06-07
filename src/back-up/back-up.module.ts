import { Module } from '@nestjs/common';
import { BackUpController } from './back-up.controller';
import { BackUpService } from './back-up.service';

@Module({
  controllers: [BackUpController],
  providers: [BackUpService]
})
export class BackUpModule {}
