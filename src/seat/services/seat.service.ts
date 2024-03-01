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

  async createSeat(seatInfo: SeatInfo): Promise<SeatInfo> {
    return await this.seatInfoRepository.save(seatInfo);
  }

  async findAllSeats(): Promise<SeatInfo[]> {
    return await this.seatInfoRepository.find();
  }

  async updateSeat(id: number, seatInfo: SeatInfo): Promise<UpdateResult> {
    return await this.seatInfoRepository.update(id, seatInfo);
  }

  async deleteSeat(id: number): Promise<DeleteResult> {
    return await this.seatInfoRepository.delete(id);
  }

  async updateSeatStatus(id: number, newStatus: string): Promise<SeatInfo> {
    const ticket = await this.seatInfoRepository.findOne({ where: { id: id } });
    if (!ticket) {
      throw new Error("Seat not found");
    }
    ticket.seat_status = newStatus;
    return await this.seatInfoRepository.save(ticket);
  }
}
