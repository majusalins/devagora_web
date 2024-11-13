export interface IValidator {
  validate(data: any): Promise<this>;
}
