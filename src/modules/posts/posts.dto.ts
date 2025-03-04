import { IsNotEmpty } from 'class-validator';

export class PostDto {
    @IsNotEmpty({ message: 'O campo Conteúdo é obrigatório!' })
    conteudo: string;
}