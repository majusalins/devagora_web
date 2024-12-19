import { Controller, Get, Post, Body, Render, Param, Delete } from '@nestjs/common';

@Controller('posts')
export class PostController {
    private posts = [];

    @Get()
    @Render('posts/index')
    index() {
        return {
            title: 'Lista de Posts',
            posts: this.posts,
        };
    }

    @Get('/create')
    @Render('posts/formulario')
    create() {
        return { title: 'Criar Novo Post' };
    }

    @Post('/create')
    createPost(@Body() post) {
        this.posts.push(post);
        return { message: 'Post criado com sucesso.' };
    }

    @Delete('/:id')
    deletePost(@Param('id') id: number) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index === -1) {
            return { message: 'Post não encontrado.' };
        }
        this.posts.splice(index, 1);
        return { message: 'Post deletado com sucesso.' };
    }
}
