import { Body, Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { TestingModuleBuilder } from '@nestjs/testing';
import { Response } from 'express';
import { setFlashErrors, setOld } from 'src/common/helpers/flash-errors';
import { UsersService } from './users.service';
import { UsuarioValidator } from './users.validator';

@Controller('users')
export class UserController {
  constructor(private readonly service: UsersService) {}

  @Get()
  @Render('users/index')
  async index() {
    return {
      title: 'Lista de Usuários',
      usuarios: await this.service.getAll(),
    };
  }

  @Get('create')
  @Render('users/formulario')
  createForm() {
    return { title: 'Cadastrar Usuário' };
  }

  @Post('create')
  async createUsuario(@Body() data, @Req() request, @Res() res: Response) {
    try{
      const validator = await new UsuarioValidator().validate(data);
      console.log(validator.getData, validator.getErrors, validator.isError);

      if (validator.isError) {
        setFlashErrors(request, validator.getErrors);
        setOld(request, data);

        return res.redirect('/users/create');
      }

      await this.service.create(data);

    } catch (err) {

      console.log(err);
    }
    
    // Redirecionar para a página de listagem com uma mensagem de sucesso
    return res.redirect('/users?success=true');
  }
}
