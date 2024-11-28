import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { TestingModuleBuilder } from '@nestjs/testing';

@Controller('users')
export class UserController {
    private usuarios = [];

    @Get()
    @Render('users/index')
    index(){
        return {
            title: 'Lista de Usuários',
            usuarios: this.usuarios,
        };
    }

    @Get('/create')
    @Render('users/formulario')
    create(){
        return { title: 'Cadastrar Usuário' };
    }

    @Post('create')
    createUsuario(@Body() usuario){
        this.usuarios.push(usuario);
        return { message: 'Usuário cadastrado com sucesso.' };
    }
}