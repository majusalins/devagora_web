import {
  Controller,
  Get,
  Post,
  Body,
  Render,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';

import { Response } from 'express';
import { setFlashErrors, setOld } from 'src/common/helpers/flash-errors';
import { PostsService } from './posts.service';
import { PostValidator } from './posts.validator';
import { Usuario } from '../users/users.entity';
import { UsersService } from '../users/users.service';

@Controller('posts')
export class PostController {
  constructor(private readonly servicePost: PostsService, private readonly serviceUser: UsersService) { }

  user = {
    id: 14,
    nome: 'Juninho',
    email: 'Juninho@gmail.com',
  };

  @Get()
  @Render('posts/index')
  async index() {

    let allPosts = await this.servicePost.getAll();
    let posts = [];

    const users = await this.serviceUser.getAll();

    users.forEach(async (user) => {
      allPosts.map((post) => {
        if (Number(post.Usuario_ID_Usuario) === user.id) {
          posts.push({ ...post, user });
        }
      });
    });


    return {
      title: 'Lista de Posts',
      user: this.user,
      posts: posts,
    };
  }

  @Get('/create')
  @Render('posts/formulario')
  create() {
    return { title: 'Criar Novo Post' };
  }

  @Post('/create')
  async createPost(@Body() post, @Res() res: Response) {
    const newPost = {
      conteudo: post.conteudo,
      data_criacao: new Date().toLocaleDateString('pt-BR'),
      Usuario_ID_Usuario: this.user.id,
      Post_Pai_ID: null,
    };

    await this.servicePost.create(newPost);

    return res.redirect('/posts');
  }



  @Delete('/:id')
  async deletePost(@Param('id') id: number) {

    const post = await this.servicePost.findById(id);

    if (!post) {
      return { message: 'Post não encontrado.' };
    }

    await this.servicePost.delete(post);
  }
}
