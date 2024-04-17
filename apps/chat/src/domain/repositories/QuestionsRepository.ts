import { Question } from "../entities/Question";

export interface IQuestionsRepository {
  save(question: Question): Promise<void>;
}

export class QuestionsRepository implements IQuestionsRepository {
  save(question: Question): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export class QuestionsInMemoryRepository implements IQuestionsRepository {
  save(question: Question): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
