import { QuestionsRepository } from "../../repositories/QuestionsRepository";
import { OpenAI } from "@langchain/openai";

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
  async execute(request?: CreateQuestionRequest | undefined): Promise<any> {
    const model = new OpenAI({
      model: "gpt-3.5-turbo-instruct", 
      temperature: 0.9,
      apiKey: "API_KEY",
    });
    try {
      const response = await model.invoke(
        "What would be a good company name a company that makes colorful socks?"
      );

      return response;
    } catch (err) {
      console.log(err);
    }
  }
}
