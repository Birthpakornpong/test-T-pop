import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//ชื่อตาราง
@Entity("seats")

//ข้อมูลชื่อ Header และ Header type ของตาราง
export class SeatInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  zone: string;

  @Column({ default: "" })
  row: string;

  @Column({ default: "" })
  seat_number: string;

  @Column({ default: "available" })
  seat_status: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
