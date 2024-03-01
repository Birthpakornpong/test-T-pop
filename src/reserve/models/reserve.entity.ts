import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { SeatInfoEntity } from "../../seat/models/seat.entity";
import { UserInfoEntity } from "../../user/models/user.entity";
@Entity("reserves")
export class ReserveInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "seat_id" })
  seat_id: number;

  @OneToOne(() => SeatInfoEntity, (seat) => seat.row)
  @JoinColumn({ name: "seat_id" })
  seat: SeatInfoEntity;

  @Column({ name: "user_id" })
  user_id: number;

  @OneToOne(() => UserInfoEntity, (user) => user.email)
  @JoinColumn({ name: "user_id" })
  user: UserInfoEntity;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date: Date;
}
