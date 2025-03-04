import { plainToInstance } from 'class-transformer';
import { BaseValidator } from 'src/common/validator/base.validator';
import { IValidator } from 'src/common/validator/interface.validator';
import { PostDto } from './posts.dto';

export class PostValidator extends BaseValidator implements IValidator {
  validate(data: any): Promise<this> {
    const dados = plainToInstance(PostDto, data);
    return this.validator(dados);
  }
}