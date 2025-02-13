import { plainToInstance } from 'class-transformer';
import { BaseValidator } from 'src/common/validator/base.validator';
import { IValidator } from 'src/common/validator/interface.validator';
import { UsuarioDto } from './users.dto';

export class UsuarioValidator extends BaseValidator implements IValidator {
  validate(data: any): Promise<this> {
    const dados = plainToInstance(UsuarioDto, data);
    return this.validator(dados);
  }
}