import { CreateQuestionController } from "../../infra/controllers/CreateQuestionController";

export class CreateQuestionControllerFactory {
    public static build() {
        const controller = new CreateQuestionController();
    }
}