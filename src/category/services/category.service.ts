import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CategoryEntity } from "../models/category.entity";
import { CategoryInfo } from "../models/interfaces/category.interface";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryInfoRepository: Repository<CategoryEntity>
  ) {}

  // การทำงานต่างๆของ แต่ละเส้น api
  // support เส้น post
  async createPost(CategoryInfo: CategoryInfo): Promise<CategoryInfo> {
    return await this.categoryInfoRepository.save(CategoryInfo);
  }
  // support เส้น get
  async findAllPosts(): Promise<CategoryInfo[]> {
    return await this.categoryInfoRepository.find();
  }
  // support เส้น patch
  async updatePost(
    id: number,
    CategoryInfo: CategoryInfo
  ): Promise<UpdateResult> {
    return await this.categoryInfoRepository.update(id, CategoryInfo);
  }
  // support เส้น delete
  async deletePost(id: number): Promise<DeleteResult> {
    return await this.categoryInfoRepository.delete(id);
  }
}
