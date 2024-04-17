import { FastifyReply, FastifyRequest } from "fastify";
import { createQuestionController } from "../../../domain/useCases/CreateQuestion";

export default async function Router(app: any, options: any) {
  app.post(
    "/accounts/create",
    async (request: FastifyRequest, response: FastifyReply) =>
      createQuestionController.execute(request, response)
  );
}
