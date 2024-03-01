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
import { UserInfo } from "../models/interfaces/user.interface";
import { UserService } from "../services/user.service";

@Controller("user") //prefix เส้น api
export class UserController {
  constructor(private userService: UserService) {}

  // method ต่างๆ
  @Post()
  async create(@Body() userInfo: UserInfo): Promise<UserInfo> {
    return await this.userService.createPost(userInfo);
  }
  @Get()
  async findAll(): Promise<UserInfo[]> {
    return await this.userService.findAllPosts();
  }
  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() userInfo: UserInfo
  ): Promise<UpdateResult> {
    return await this.userService.updatePost(id, userInfo);
  }
  @Delete(":id")
  async delete(@Param("id") id: number): Promise<DeleteResult> {
    return await this.userService.deletePost(id);
  }
}
