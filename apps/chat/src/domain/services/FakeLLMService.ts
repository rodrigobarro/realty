import { Question } from "../entities/Question";
import IQuestionService from "./IQuestionService";
import { CompletionResponse } from "./OpenAIService";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export class FakeLLMService implements IQuestionService {
  async createCompletion(question: string): Promise<CompletionResponse> {
    const completion = {
      id: "chatcmpl-123",
      object: "chat.completion.chunk",
      created: 1694268190,
      model: "gpt-3.5-turbo-0125",
      system_fingerprint: "fp_44709d6fcb",
      choices: [
        {
          index: 0,
          delta: { content: "Hello" },
          logprobs: null,
          finish_reason: null,
        },
      ],
    };
    await sleep(1000);
    return { id: completion.id, message: completion.choices[0].delta.content };
  }
}
