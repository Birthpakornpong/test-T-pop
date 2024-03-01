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

  @Column({ default: 0 })
  product_rating: number;

  @Column({ default: "" })
  description: string;

  @Column({ default: "" })
  descriptionEn: string;

  @Column({ default: "" })
  product_storage_instruction_th: string;

  @Column({ default: "" })
  product_storage_instruction_en: string;

  @Column({ default: "" })
  product_precautionary_th: string;

  @Column({ default: "" })
  product_precautionary_en: string;

  @Column({ default: 0 })
  category_id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
