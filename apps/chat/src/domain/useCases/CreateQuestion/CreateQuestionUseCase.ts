import { Question } from "../../entities/Question";
import { QuestionsRepository } from "../../repositories/QuestionsRepository";
import IQuestionService from "../../services/IQuestionService";

interface UseCase<IRequest, IResponse> {
  execute(request?: IRequest): Promise<IResponse> | IResponse;
}

export type CreateQuestionRequest =  {
  question: string;
  accountId: string;
}

export class CreateQuestionUseCase
  implements UseCase<CreateQuestionRequest, Promise<Response>>
{
  private repository: QuestionsRepository;
  private questionsService: IQuestionService;

  constructor(
    repository: QuestionsRepository,
    questionsService: IQuestionService
  ) {
    this.repository = repository;
    this.questionsService = questionsService;
  }
  async execute(request: CreateQuestionRequest): Promise<any> {
    try {
      const completion = await this.questionsService.createCompletion(request.question);
      const question = Question.create({
        question: request.question,
        completion: completion.message,
        accountId: request.accountId
      });
      return question
    } catch (err) {
      console.log(err);
    }
  }
}
