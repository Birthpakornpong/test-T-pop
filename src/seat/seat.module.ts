import { Module } from "@nestjs/common";
import { SeatService } from "./services/seat.service";
import { SeatController } from "./controllers/seat.controller";
import { TypeOrmModule } from "@nestjs/typeorm"; //newline
import { SeatInfoEntity } from "./models/seat.entity"; //newline

@Module({
  imports: [TypeOrmModule.forFeature([SeatInfoEntity])], //newline
  providers: [SeatService],
  controllers: [SeatController],
})
export class SeatModule {}
