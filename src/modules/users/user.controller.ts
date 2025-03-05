import { Body, Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { TestingModuleBuilder } from '@nestjs/testing';
import { Response } from 'express';
import { setFlashErrors, setOld } from 'src/common/helpers/flash-errors';
import { UsersService } from './users.service';
import { UsuarioValidator } from './users.validator';

@Controller('users')
export class UserController {
  constructor(private readonly service: UsersService) { }

  @Get()
  @Render('users/index')
  async index() {
    let usuarios = await this.service.getAll()

    usuarios.forEach(usuarios => {
      if (usuarios.data_cadastro) {
        usuarios.data_formatada = new Date(usuarios.data_cadastro).toLocaleString("pt-BR", {
          timeZone: "America/Manaus",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      }
    })

    return {
      title: 'Lista de Usuários',
      usuarios: usuarios,
    };
  }

  @Get('create')
  @Render('users/formulario')
  createForm() {
    return { title: 'Cadastrar Usuário' };
  }

  @Post('create')
  async createUsuario(@Body() data, @Req() request, @Res() res: Response) {
    try {

      const validator = await new UsuarioValidator().validate(data);

      if (validator.isError) {
        setFlashErrors(request, validator.getErrors);
        setOld(request, data);

        return res.redirect('/users/create');
      }

      console.log(data);

      await this.service.create(data);
      return res.redirect('/users?success=true');
    } catch (err) {
      console.log("DEU ERRO")
      console.log(err);
    }

  }
}
