// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';
@Injectable()
export class PostsService {
  async getAll() {
    return await Post.find();
  }
  async create(data: any) {
    const post = Post.create({ ...data });
    return await post.save();
  }

  async findOne(conteudo: string) {
    return await Post.findOne({ where: { conteudo } });
  }
}
