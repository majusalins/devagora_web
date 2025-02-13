import { IsNotEmpty } from 'class-validator';

export class UsuarioDto {
    @IsNotEmpty({ message: 'O campo Nome é obrigatório' })
    nome: string;

    @IsNotEmpty({ message: 'O campo Senha é obrigatório' })
    senha: string;
}