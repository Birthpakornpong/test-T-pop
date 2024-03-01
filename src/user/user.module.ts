import { Module } from "@nestjs/common";
import { UserService } from "./services/user.service";
import { UserController } from "./controllers/user.controller";
import { TypeOrmModule } from "@nestjs/typeorm"; //newline
import { UserInfoEntity } from "./models/user.entity"; //newline

@Module({
  imports: [TypeOrmModule.forFeature([UserInfoEntity])], //newline
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
