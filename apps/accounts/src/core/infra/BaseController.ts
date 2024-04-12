import { FastifyReply, FastifyRequest } from "fastify";

export abstract class BaseController {
  protected request: FastifyRequest;
  protected response: FastifyReply;

  protected abstract exec(): Promise<void | unknown>;

  public execute(request: FastifyRequest, response: FastifyReply): void {
    this.request = request;
    this.response = response;
    this.exec();
  }

  public ok<T>(res: FastifyReply, dto?: T) {
    if (!!dto) {
      return res.status(200).serialize(dto);
    } else {
      return res.send(200);
    }
  }

  public fail(error: Error | string | unknown) {
    console.log(typeof error);
    return this.response.status(500).serialize({
      message: error?.toString(),
    });
  }

  public badRequest(message?: string) {
    return BaseController.jsonResponse(
      this.response,
      400,
      message ? message : "Bad request"
    );
  }

  public static jsonResponse(
    res: FastifyReply,
    code: number,
    message: string
  ) {
    return res.status(code).serialize({ message });
  }
}
