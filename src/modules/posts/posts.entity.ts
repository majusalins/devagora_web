import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from 'src/modules/users/users.entity';

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

  @Column({ name: 'Usuario_ID_Usuario' })
  Usuario_ID_Usuario: string;

  @Column({ name: 'Post_Pai_ID' })
  Post_Pai_ID: string;

}
