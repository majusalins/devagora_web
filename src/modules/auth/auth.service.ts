// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email, pass): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user && user.senha === pass) {
      const { senha, ...result } = user;
      return result;
    }

    return null;
  }
}
