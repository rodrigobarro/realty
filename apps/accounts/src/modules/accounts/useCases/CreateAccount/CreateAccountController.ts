import { BaseController } from "../../../../core/infra/BaseController";
import CreateAccountRequestDTO  from "./CreateAccountDTO";
import { CreateAccountUseCase } from "./CreateAccountUseCase";
import * as CreateAccountErrors from "./CreateAccountErrors";

export class CreateAccountController extends BaseController {
  private useCase: CreateAccountUseCase;

  constructor(useCase: CreateAccountUseCase) {
    super();
    this.useCase = useCase;
  }

  async exec(): Promise<any> {
    const dto: CreateAccountRequestDTO = this.request
      .body as CreateAccountRequestDTO;

    try {
      const result = await this.useCase.execute(dto);
      console.log("result")
      console.log(result)
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case CreateAccountErrors.AccountCreateRequestIsNotValid:
            return this.badRequest(error.errorValue().message);
          default:
            return this.fail(error.errorValue().message);
        }
      } else {
        return this.ok(this.response);
      }
    } catch (err: unknown) {
      console.log("errorrr")
      console.log(err)
      return this.fail(err);
    }
  }
}
