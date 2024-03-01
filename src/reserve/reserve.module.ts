import { Module } from '@nestjs/common';
import { ReserveService } from './services/reserve.service';
import { ReserveController } from './controllers/reserve.controller';

@Module({
  providers: [ReserveService],
  controllers: [ReserveController]
})
export class ReserveModule {}
