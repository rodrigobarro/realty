import { FastifyReply, FastifyRequest } from "fastify";
import { createAccountController } from "../../../useCases/CreateAccount";

export default async function Router(app: any, options: any) {
  app.post(
    "/accounts/create",
    async (request: FastifyRequest, response: FastifyReply) =>
      createAccountController.execute(request, response)
  );
}
