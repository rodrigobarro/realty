import { Question } from "../entities/Question";
import { CompletionResponse } from "./OpenAIService";

export default interface IQuestionService {
  createCompletion(question: string): Promise<CompletionResponse>;
}
