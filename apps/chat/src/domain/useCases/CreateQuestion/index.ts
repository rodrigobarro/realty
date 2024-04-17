import { QuestionsRepository } from "../../repositories/QuestionsRepository";
import { CreateQuestionController } from "./CreateQuestionController";
import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

const questionsRepository = new QuestionsRepository();
const createQuestionUseCase = new CreateQuestionUseCase(questionsRepository);
const createQuestionController = new CreateQuestionController(createQuestionUseCase);

export {
    createQuestionController
}