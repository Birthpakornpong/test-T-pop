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

  async createUser(userInfo: UserInfo): Promise<UserInfo> {
    return await this.userInfoRepository.save(userInfo);
  }

  async findAllUsers(): Promise<UserInfo[]> {
    return await this.userInfoRepository.find();
  }

  async findOneUsers(email: string): Promise<UserInfo> {
    return await this.userInfoRepository.findOne({
      where: { email: email },
    });
  }

  async updateUser(id: number, UserInfo: UserInfo): Promise<UpdateResult> {
    return await this.userInfoRepository.update(id, UserInfo);
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return await this.userInfoRepository.delete(id);
  }
}
