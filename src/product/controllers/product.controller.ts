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
import { ProductInfo } from "../models/interfaces/product.interface";
import { ProductService } from "../services/product.service";

@Controller("product") //prefix เส้น api
export class ProductController {
  constructor(private productService: ProductService) {}

  // method ต่างๆ
  @Post()
  async create(@Body() ProductInfo: ProductInfo): Promise<ProductInfo> {
    return await this.productService.createPost(ProductInfo);
  }
  @Get()
  async findAll(): Promise<ProductInfo[]> {
    return await this.productService.findAllPosts();
  }
  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() ProductInfo: ProductInfo
  ): Promise<UpdateResult> {
    return await this.productService.updatePost(id, ProductInfo);
  }
  @Delete(":id")
  async delete(@Param("id") id: number): Promise<DeleteResult> {
    return await this.productService.deletePost(id);
  }
}
