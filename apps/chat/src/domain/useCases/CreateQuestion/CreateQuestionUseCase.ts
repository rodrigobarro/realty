import { QuestionsRepository } from "../../repositories/QuestionsRepository";

interface UseCase<IRequest, IResponse> {
  execute(request?: IRequest): Promise<IResponse> | IResponse;
}

export interface CreateQuestionRequest {
  question: string;
  accountId: string;
}

export class CreateQuestionUseCase
  implements UseCase<CreateQuestionRequest, Promise<Response>>
{
  constructor(repository: QuestionsRepository) {}
  async execute(
    request?: CreateQuestionRequest | undefined
  ): Promise<Response> | Promise<Response> {
    throw new Error("Method not implemented.");
  }
}
