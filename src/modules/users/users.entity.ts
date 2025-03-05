import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from 'src/modules/posts/posts.entity';

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'ID_Usuario' })
  id!: number;

  @Column({ name: 'nome' })
  nome: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'senha' })
  senha: string;

  @Column({ name: 'data_cadastro' })
  data_cadastro: Date;

  data_formatada?: string

}
