import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ReserveInfoEntity } from "../models/reserve.entity";
import { ReserveInfo } from "../models/interfaces/reserve.interface";
import { SeatInfoEntity } from "../../seat/models/seat.entity";
import { SeatInfo } from "../../seat/models/interfaces/seat.interface";
@Injectable()
export class ReserveService {
  constructor(
    @InjectRepository(ReserveInfoEntity)
    private readonly reserveInfoRepository: Repository<ReserveInfoEntity>,
    @InjectRepository(SeatInfoEntity)
    private readonly seatInfoRepository: Repository<SeatInfoEntity>
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

  async reserveSeat(reserveInfo: ReserveInfo): Promise<SeatInfo> {
    const seat = await this.seatInfoRepository.findOne({
      where: { id: reserveInfo.seat_id },
    });
    if (!seat) {
      throw new Error("Seat not found");
    }
    seat.seat_status = "reserved";
    await this.reserveInfoRepository.save(reserveInfo);
    return await this.seatInfoRepository.save(seat);
  }

  async findReservesByUser(id: number): Promise<ReserveInfo[]> {
    return await this.reserveInfoRepository.find({
      where: { id: id },
    });
  }
}
