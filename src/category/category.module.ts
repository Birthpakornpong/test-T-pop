import { Module } from "@nestjs/common";
import { CategoryService } from "./services/category.service";
import { CategoryController } from "./controllers/category.controller";
import { TypeOrmModule } from "@nestjs/typeorm"; //newline
import { CategoryEntity } from "./models/category.entity"; //newline
@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])], //newline
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
