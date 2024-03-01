import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { UserInfoEntity } from "../models/user.entity";
import { UserInfo } from "../models/interfaces/user.interface";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserInfoEntity)
    private readonly userInfoRepository: Repository<UserInfoEntity>
  ) {}

  // การทำงานต่างๆของ แต่ละเส้น api
  // support เส้น post
  async createPost(userInfo: UserInfo): Promise<UserInfo> {
    return await this.userInfoRepository.save(userInfo);
  }
  // support เส้น get
  async findAllPosts(): Promise<UserInfo[]> {
    return await this.userInfoRepository.find();
  }
  // support เส้น patch
  async updatePost(id: number, UserInfo: UserInfo): Promise<UpdateResult> {
    return await this.userInfoRepository.update(id, UserInfo);
  }
  // support เส้น delete
  async deletePost(id: number): Promise<DeleteResult> {
    return await this.userInfoRepository.delete(id);
  }
}
