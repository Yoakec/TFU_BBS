import { Module } from '@nestjs/common';
import { UpService } from './up.service';
import { UpController } from './up.controller';

@Module({
  providers: [UpService],
  exports: [UpService],
  controllers: [UpController],
})
export class UpModule {}
