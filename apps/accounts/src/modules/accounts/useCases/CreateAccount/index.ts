import { accountRepository } from "../../repositories";
import { CreateAccountController } from "./CreateAccountController";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

const createAccountUseCase = new CreateAccountUseCase(accountRepository);
const createAccountController = new CreateAccountController(
  createAccountUseCase
);

export { createAccountUseCase, createAccountController };
