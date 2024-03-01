import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm"; //newline
import { UserService } from "../user/services/user.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { UserInfoEntity } from "../user/models/user.entity";
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "your_secret_key",
      signOptions: { expiresIn: "1h" },
    }),
    TypeOrmModule.forFeature([UserInfoEntity]),
  ], //newline
  providers: [AuthService, LocalStrategy, JwtStrategy, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
