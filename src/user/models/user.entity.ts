import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//ชื่อตาราง
@Entity("users")

//ข้อมูลชื่อ Header และ Header type ของตาราง
export class UserInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  name: string;

  @Column({ default: "" })
  email: string;

  @Column({ default: "" })
  password: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
