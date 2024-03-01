import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from "@nestjs/common";
import { DeleteResult, UpdateResult } from "typeorm";
import { SeatInfo } from "../models/interfaces/seat.interface";
import { SeatService } from "../services/seat.service";

@Controller("seat") //prefix เส้น api
export class SeatController {
  constructor(private seatService: SeatService) {}

  // method ต่างๆ
  @Post()
  async create(@Body() seatInfo: SeatInfo): Promise<SeatInfo> {
    return await this.seatService.createSeat(seatInfo);
  }
  @Get()
  async findAll(): Promise<SeatInfo[]> {
    return await this.seatService.findAllSeats();
  }
  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() seatInfo: SeatInfo
  ): Promise<UpdateResult> {
    return await this.seatService.updateSeat(id, seatInfo);
  }
  @Delete(":id")
  async delete(@Param("id") id: number): Promise<DeleteResult> {
    return await this.seatService.deleteSeat(id);
  }

  @Patch(":id/update-status/:newStatus")
  async updateSeatStatus(
    @Param("id") id: number,
    @Param("newStatus") newStatus: string
  ): Promise<SeatInfo> {
    return await this.seatService.updateSeatStatus(id, newStatus);
  }
}
