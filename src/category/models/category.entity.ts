import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//ชื่อตาราง
@Entity("category")

//ข้อมูลชื่อ Header และ Header type ของตาราง
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  name: string;

  @Column({ default: "" })
  nameTh: string;

  @Column({ default: true })
  active: Boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
