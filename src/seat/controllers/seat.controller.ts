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
    return await this.seatService.createPost(seatInfo);
  }
  @Get()
  async findAll(): Promise<SeatInfo[]> {
    return await this.seatService.findAllPosts();
  }
  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() seatInfo: SeatInfo
  ): Promise<UpdateResult> {
    return await this.seatService.updatePost(id, seatInfo);
  }
  @Delete(":id")
  async delete(@Param("id") id: number): Promise<DeleteResult> {
    return await this.seatService.deletePost(id);
  }
}
