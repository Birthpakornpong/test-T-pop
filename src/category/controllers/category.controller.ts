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
import { CategoryInfo } from "../models/interfaces/category.interface";
import { CategoryService } from "../services/category.service";

@Controller("category")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  // method ต่างๆ
  @Post()
  async create(@Body() categoryInfo: CategoryInfo): Promise<CategoryInfo> {
    return await this.categoryService.createPost(categoryInfo);
  }
  @Get()
  async findAll(): Promise<CategoryInfo[]> {
    return await this.categoryService.findAllPosts();
  }
  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() categoryInfo: CategoryInfo
  ): Promise<UpdateResult> {
    return await this.categoryService.updatePost(id, categoryInfo);
  }
  @Delete(":id")
  async delete(@Param("id") id: number): Promise<DeleteResult> {
    return await this.categoryService.deletePost(id);
  }
}
