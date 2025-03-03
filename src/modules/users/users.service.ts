// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Usuario } from './users.entity';
@Injectable()
export class UsersService {
  async getAll() {
    return await Usuario.find();
  }
  async create(data: any) {
    const servidor = Usuario.create({ ...data });
    return await servidor.save();
  }

  async findOne(email: string) {
    return await Usuario.findOne({ where: { email } });
  }
}
