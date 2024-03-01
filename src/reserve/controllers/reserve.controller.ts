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
import { ReserveInfo } from "../models/interfaces/reserve.interface";
import { ReserveService } from "../services/reserve.service";

@Controller("reserve")
export class ReserveController {
  constructor(private reserveService: ReserveService) {}

  // reserve
  @Post()
  async reserve(@Body() reserveInfo: ReserveInfo): Promise<ReserveInfo> {
    return await this.reserveService.reserveSeat(reserveInfo);
  }
  @Get()
  async findAll(): Promise<ReserveInfo[]> {
    return await this.reserveService.findAllReserves();
  }

  @Get("/reserve-by-user/:id")
  async reservesByUser(@Param("id") id: number): Promise<Object> {
    return await this.reserveService.findReservesByUser(id);
  }
  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() reserveInfo: ReserveInfo
  ): Promise<UpdateResult> {
    return await this.reserveService.updateReserve(id, reserveInfo);
  }
  @Delete(":id")
  async delete(@Param("id") id: number): Promise<DeleteResult> {
    return await this.reserveService.deleteReserve(id);
  }
}
