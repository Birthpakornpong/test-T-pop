import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reserves")
export class ReserveInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  seat_id: number;

  @Column({ default: 0 })
  user_id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date: Date;
}
