import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { PersonalInfoEntity } from "../models/personal.entity";
import { PersonalInfo } from "../models/interfaces/personal.interface";

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(PersonalInfoEntity)
    private readonly personalInfoRepository: Repository<PersonalInfoEntity>
  ) {}

  // การทำงานต่างๆของ แต่ละเส้น api
  // support เส้น post
  async createPost(personalInfo: PersonalInfo): Promise<PersonalInfo> {
    return await this.personalInfoRepository.save(personalInfo);
  }
  // support เส้น get
  async findAllPosts(): Promise<PersonalInfo[]> {
    return await this.personalInfoRepository.find();
  }
  // support เส้น patch
  async updatePost(
    id: number,
    personalInfo: PersonalInfo
  ): Promise<UpdateResult> {
    return await this.personalInfoRepository.update(id, personalInfo);
  }
  // support เส้น delete
  async deletePost(id: number): Promise<DeleteResult> {
    return await this.personalInfoRepository.delete(id);
  }
}
