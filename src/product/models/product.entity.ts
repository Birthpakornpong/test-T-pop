import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//ชื่อตาราง
@Entity("products")

//ข้อมูลชื่อ Header และ Header type ของตาราง
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  name: string;

  @Column({ default: 0 })
  qty: number;

  @Column({ default: 0 })
  price: number;

  @Column({ default: 0 })
  special_price: number;

  @Column({ default: "" })
  description: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
