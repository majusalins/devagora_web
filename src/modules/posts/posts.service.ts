// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';
import { Usuario } from 'src/modules/users/users.entity';

@Injectable()
export class PostsService {

  async getAll() {
    return await Post.find();
  }

  async create(data: any) {
    let post = Post.create({ ...data });
    post.tipo_post = "pergunta";
    post.data_publicacao = new Date();

    return await post.save();
  }

  async findOne(conteudo: string) {
    return await Post.findOne({ where: { conteudo } });
  }

  async findById(id: number) {
    return await Post.findOne({ where: { id } });
  }

  async delete(post: Post) {
    await post.remove();
  }
}
