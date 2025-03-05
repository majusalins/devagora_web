import { Module } from '@nestjs/common';
import { PostController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [PostController],
  providers: [PostsService, UsersService],
  exports: [PostsService],
})
export class PostsModule { }
