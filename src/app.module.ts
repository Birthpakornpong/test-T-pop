import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { LocalStrategy } from "./auth/local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./auth/jwt.strategy";
import { UserModule } from "./user/user.module";
import { SeatModule } from "./seat/seat.module";
import { ReserveModule } from "./reserve/reserve.module";
import { AuthModule } from "./auth/auth.module";

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

    PassportModule,
    JwtModule.register({
      secret: "your_secret_key",
      signOptions: { expiresIn: "1h" },
    }),
    UserModule,
    SeatModule,
    ReserveModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
