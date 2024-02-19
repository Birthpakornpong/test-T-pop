import { Module } from "@nestjs/common";
import { PersonalService } from "./services/personal.service";
import { PersonalController } from "./controllers/personal.controller";
import { TypeOrmModule } from "@nestjs/typeorm"; //newline
import { PersonalInfoEntity } from "./models/personal.entity"; //newline

@Module({
  imports: [TypeOrmModule.forFeature([PersonalInfoEntity])],
  providers: [PersonalService],
  controllers: [PersonalController],
})
export class PersonalModule {}
