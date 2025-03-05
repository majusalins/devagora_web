// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Usuario } from './users.entity';
@Injectable()
export class UsersService {
  async getAll() {
    return await Usuario.find();
  }
  async create(data: Usuario) {
    let usuario = Usuario.create({ ...data });

    usuario.data_cadastro = new Date();

    return await usuario.save();
  }

  async findOne(id: number) {
    return await Usuario.findOne({ where: { id } });
  }
}
