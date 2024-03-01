import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ProductEntity } from "../models/product.entity";
import { ProductInfo } from "../models/interfaces/product.interface";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productInfoRepository: Repository<ProductEntity>
  ) {}

  // การทำงานต่างๆของ แต่ละเส้น api
  // support เส้น post
  async createPost(ProductInfo: ProductInfo): Promise<ProductInfo> {
    return await this.productInfoRepository.save(ProductInfo);
  }
  // support เส้น get
  async findAllPosts(): Promise<ProductInfo[]> {
    return await this.productInfoRepository.find();
  }

  // support เส้น get
  async findPost(id: number): Promise<ProductInfo> {
    return await this.productInfoRepository.findOne({
      where: {
        id,
      },
    });
  }
  // support เส้น patch
  async updatePost(
    id: number,
    ProductInfo: ProductInfo
  ): Promise<UpdateResult> {
    return await this.productInfoRepository.update(id, ProductInfo);
  }
  // support เส้น delete
  async deletePost(id: number): Promise<DeleteResult> {
    return await this.productInfoRepository.delete(id);
  }
}
