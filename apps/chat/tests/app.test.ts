import { Question } from "../src/domain/entities/Question";
import { QuestionsInMemoryRepository } from "../src/domain/repositories/QuestionsRepository";
import { CreateQuestionUseCase } from "../src/domain/useCases/CreateQuestion/CreateQuestionUseCase";
import App from "../src/infra/http/app";

test("Create a new Completations/Questions", async () => {
  // const app = await App();
  // const res = await app.inject({
  //   url: "/questions/create",
  //   method: "POST",
  // });
  // expect(res.statusCode).toEqual(200);
  // app.close();
});

test("New question should not be null", async () => {
  const question = Question.create({
    question: "Hi",
    completion: "Hi, how can i help you?",
    accountId: "acc-1",
  });
  expect(question).not.toBeFalsy();
  expect(question.question).toBe("Hi");
  expect(question.completion).toBe("Hi, how can i help you?");
  expect(question.accountId).toBe("acc-1");
});

test("New CreateQuestionUseCase should not be null", async () => {
  const repository = new QuestionsInMemoryRepository();
  const useCase = new CreateQuestionUseCase(repository);
  const createQuestionRequest = {
    question: "Hi",
    completion: "Hi, how can i help you?",
    accountId: "acc-1",
  }
  const result = useCase.execute(createQuestionRequest);
  console.log(result)
});
