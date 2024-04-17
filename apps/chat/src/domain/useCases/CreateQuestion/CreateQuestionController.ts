import {
  CreateQuestionRequest,
  CreateQuestionUseCase,
} from "./CreateQuestionUseCase";
import { BaseController } from "../../../infra/BaseController";

export class CreateQuestionController extends BaseController {
  private useCase: CreateQuestionUseCase;

  constructor(useCase: CreateQuestionUseCase) {
    super();
    this.useCase = useCase;
  }

  async exec(): Promise<unknown> {
    const request = this.request.body as CreateQuestionRequest;
    try {
      const result = await this.useCase.execute(request);
      console.log(result);
      return this.ok(this.response);
    } catch (err: unknown) {
      return this.fail(err);
    }
  }
}
