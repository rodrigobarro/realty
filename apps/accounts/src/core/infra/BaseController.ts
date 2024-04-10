import { FastifyReply, FastifyRequest } from "fastify";

export abstract class BaseController {
  protected request: FastifyRequest;
  protected response: FastifyReply;

  protected abstract exec(): Promise<void | any>;

  public execute(request: FastifyRequest, response: FastifyReply): void {
    this.request = request;
    this.response = response;
    this.exec();
  }
}
