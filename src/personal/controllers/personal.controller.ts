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
import { PersonalInfo } from "../models/interfaces/personal.interface";
import { PersonalService } from "../services/personal.service";

@Controller("personal") //prefix เส้น api
export class PersonalController {
  constructor(private personalService: PersonalService) {}

  // method ต่างๆ
  @Post()
  async create(@Body() PersonalInfo: PersonalInfo): Promise<PersonalInfo> {
    return await this.personalService.createPost(PersonalInfo);
  }
  @Get()
  async findAll(): Promise<PersonalInfo[]> {
    return await this.personalService.findAllPosts();
  }
  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() PersonalInfo: PersonalInfo
  ): Promise<UpdateResult> {
    return await this.personalService.updatePost(id, PersonalInfo);
  }
  @Delete(":id")
  async delete(@Param("id") id: number): Promise<DeleteResult> {
    return await this.personalService.deletePost(id);
  }
}
