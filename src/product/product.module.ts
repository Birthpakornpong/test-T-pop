import { Module } from "@nestjs/common";
import { ProductService } from "./services/product.service";
import { ProductController } from "./controllers/product.controller";
import { TypeOrmModule } from "@nestjs/typeorm"; //newline
import { ProductEntity } from "./models/product.entity"; //newline
@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])], //newline
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
