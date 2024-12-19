// src/posts/posts.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [
    { postId: 1, title: 'NestJS Basics', content: 'Learn the basics of NestJS.', author: 'john' },
    { postId: 2, title: 'Advanced TypeScript', content: 'Deep dive into TypeScript.', author: 'chris' },
    { postId: 3, title: 'REST API Design', content: 'Best practices for APIs.', author: 'maria' },
  ];

  findAll(): any[] {
    return this.posts;
  }

  findOne(postId: number): any {
    return this.posts.find(post => post.postId === postId);
  }

  create(post: any): void {
    const newPostId = this.posts.length > 0 
      ? this.posts[this.posts.length - 1].postId + 1 
      : 1;
    this.posts.push({ ...post, postId: newPostId });
  }

  delete(postId: number): void {
    this.posts = this.posts.filter(post => post.postId !== postId);
  }
}
