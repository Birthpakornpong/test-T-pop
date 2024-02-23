import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonalModule } from './personal/personal.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CategoryController } from './flat/category/controllers/category/category.controller';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    PersonalModule,
    ProductModule,
    CategoryModule,
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
