import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { SeatInfoEntity } from "../models/seat.entity";
import { SeatInfo } from "../models/interfaces/seat.interface";

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(SeatInfoEntity)
    private readonly seatInfoRepository: Repository<SeatInfoEntity>
  ) {}

  // การทำงานต่างๆของ แต่ละเส้น api
  // support เส้น post
  async createPost(userInfo: SeatInfo): Promise<SeatInfo> {
    return await this.seatInfoRepository.save(userInfo);
  }
  // support เส้น get
  async findAllPosts(): Promise<SeatInfo[]> {
    return await this.seatInfoRepository.find();
  }
  // support เส้น patch
  async updatePost(id: number, seatInfo: SeatInfo): Promise<UpdateResult> {
    return await this.seatInfoRepository.update(id, seatInfo);
  }
  // support เส้น delete
  async deletePost(id: number): Promise<DeleteResult> {
    return await this.seatInfoRepository.delete(id);
  }
}
