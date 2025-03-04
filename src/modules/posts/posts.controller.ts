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

@Controller('posts')
export class PostController {
  private posts = [];

  user = {
    id: 1,
    nome: 'Maju',
    username: 'maju',
  };

  @Get()
  @Render('posts/index')
  index() {
    return {
      title: 'Lista de Posts',
      user: this.user,
      posts: this.posts,
    };
  }

  @Get('/create')
  @Render('posts/formulario')
  create() {
    return { title: 'Criar Novo Post' };
  }

  @Post('/create')
  createPost(@Body() post, @Res() res: Response) {
    const newPost = {
      id: this.posts.length + 1,
      conteudo: post.conteudo,
      data_criacao: new Date().toLocaleDateString('pt-BR'),
      user: this.user,
    };

    this.posts.push(newPost);

    return res.redirect('/posts');
  }

  @Delete('/:id')
  deletePost(@Param('id') id: number) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index === -1) {
      return { message: 'Post não encontrado.' };
    }
    this.posts.splice(index, 1);
    return { message: 'Post deletado com sucesso.' };
  }
}
