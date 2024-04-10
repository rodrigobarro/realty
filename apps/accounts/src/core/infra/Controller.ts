export type Request = {
  payload: any;
  params: any;
  query: any;
};

export type Response = {
  status: number;
  payload: any;
};

export interface Controller {
  handle(request: Request): Promise<Response>;
}
