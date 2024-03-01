import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reserves")
export class ReserveInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  seat_id: string;

  @Column({ default: "" })
  user_id: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date: Date;
}
