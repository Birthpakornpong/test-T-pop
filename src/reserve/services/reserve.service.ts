import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ReserveInfoEntity } from "../models/reserve.entity";
import { ReserveInfo } from "../models/interfaces/reserve.interface";

@Injectable()
export class ReserveService {
  constructor(
    @InjectRepository(ReserveInfoEntity)
    private readonly reserveInfoRepository: Repository<ReserveInfoEntity>
  ) {}

  async createReserve(reserveInfo: ReserveInfo): Promise<ReserveInfo> {
    return await this.reserveInfoRepository.save(reserveInfo);
  }

  async findAllReserves(): Promise<ReserveInfo[]> {
    return await this.reserveInfoRepository.find();
  }

  async updateReserve(
    id: number,
    reserveInfo: ReserveInfo
  ): Promise<UpdateResult> {
    return await this.reserveInfoRepository.update(id, reserveInfo);
  }

  async deleteReserve(id: number): Promise<DeleteResult> {
    return await this.reserveInfoRepository.delete(id);
  }
}
