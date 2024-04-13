import { UseCaseError } from "../../../../core/application/UseCaseError";
import { Result } from "../../../../core/application/Result";

export class AccountCreateRequestIsNotValid extends Result<UseCaseError> {
  constructor(field: string) {
    super(false, {
      message: `The ${field} is not valid.`,
    } as UseCaseError);
  }
}
