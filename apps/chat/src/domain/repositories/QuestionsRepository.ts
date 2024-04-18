import { setTimeout } from "timers/promises";
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
  private questions: Question[];

  save(question: Question): Promise<void> {
    this.questions.push(question);
    return setTimeout(1000);
  }
}
