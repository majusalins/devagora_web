import { validate } from 'class-validator';

export class BaseValidator {
  #_data: any;

  #_isError: boolean = false;

  #_errors: any[] = [];

  get isError(): boolean {
    return this.#_isError;
  }

  get getErrors(): string[] {
    return this.#_errors;
  }

  get getData() {
    return this.#_data;
  }

  protected async validator(data: object): Promise<this> {
    this.#_data = data;

    const errors = await validate(data, {
      whitelist: true,
      validationError: { target: false, value: false },
    });

    errors.forEach((e) => {
      if (e.constraints) {
        this.#_isError = true;
        for (const constraint in e.constraints) {
          this.#_errors.push({
            property: e.property,
            message: e.constraints[constraint],
          });
        }
      }
    });

    return this;
  }
}
