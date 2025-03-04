import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'ID_Post' })
  id!: number;

  @Column({ name: 'data_publicacao' })
  data_publicacao: Date;

  @Column({ name: 'tipo_post' })
  tipo_post: string;

  @Column({ name: 'conteudo' })
  conteudo: string;

}
