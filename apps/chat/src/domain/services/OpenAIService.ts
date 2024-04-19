import { OpenAI } from "@langchain/openai";
import { Question } from "../entities/Question";
import IQuestionService from "./IQuestionService";

export type CompletionResponse = {
  id: string;
  message: string;
};

export class OpenAIService implements IQuestionService {
  private providerConfig: object;
  
  async createCompletion(question: Question): Promise<CompletionResponse> {
    const model = new OpenAI({
      model: "gpt-3.5-turbo-instruct",
      temperature: 0.9,
      apiKey: "API_KEY",
    });

    const response = await model.invoke(
      "What would be a good company name a company that makes colorful socks?"
    );

    return {id: "", message: ""};
  }
}
