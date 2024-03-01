import { Module } from "@nestjs/common";
import { ReserveService } from "./services/reserve.service";
import { ReserveController } from "./controllers/reserve.controller";
import { TypeOrmModule } from "@nestjs/typeorm"; //newline
import { ReserveInfoEntity } from "./models/reserve.entity"; //newline
import { SeatInfoEntity } from "../seat/models/seat.entity";
@Module({
  imports: [TypeOrmModule.forFeature([ReserveInfoEntity, SeatInfoEntity])], //newline
  providers: [ReserveService],
  controllers: [ReserveController],
})
export class ReserveModule {}
