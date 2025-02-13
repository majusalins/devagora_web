import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario extends BaseEntity {
@PrimaryGeneratedColumn({name:"ID_Usuario"})
id!: number;

@Column({ name: 'nome' })
nome: string;

@Column({ name: 'email' })
email: string;

@Column({ name: 'senha' })
senha: string;

@Column({ name: 'data_cadastro' })
data_cadastro: Date;

}