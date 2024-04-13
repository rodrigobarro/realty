import { Either, Result, right, left } from "../../../../core/application/Result";
import { UseCase } from "../../../../core/domain/UseCase";
import { Account, AccountEmail, AccountPhone } from "../../domain/account";
import {
  IAccountRepository,
} from "../../repositories/AccountRepository";
import CreateAccountRequestDTO from "./CreateAccountDTO";
import * as ApplicationErrors from "../../../../core/application/ApplicationErrors";
import * as CreateAccountErrors from "./CreateAccountErrors";

type Response = Either<
  | ApplicationErrors.UnexpectedError
  | CreateAccountErrors.AccountCreateRequestIsNotValid
  | Result<any>,
  Result<void>
>;

export class CreateAccountUseCase
  implements UseCase<CreateAccountRequestDTO, Promise<Response>>
{
  private accountRepository: IAccountRepository;

  constructor(repo: IAccountRepository) {
    this.accountRepository = repo;
  }

  public async execute(request: CreateAccountRequestDTO): Promise<Response> {
    const { name, email, phone } = request;

    const emailOrError = AccountEmail.create(email);
    const phoneOrError = AccountPhone.create(phone);

    const combinedPropsResult = Result.combine([emailOrError, phoneOrError]);

    if (combinedPropsResult.isFailure) {
      return left(Result.fail<void>(combinedPropsResult.error)) as Response;
    }

    const accountOrError = Account.create({
      name,
      email: emailOrError.getValue(),
      phone: phoneOrError.getValue()
    });

    const account = accountOrError.getValue();

    try {
      await this.accountRepository.save(account);
    } catch (err) {
      return left(new ApplicationErrors.UnexpectedError(err)) as Response;
    }

    return right(Result.ok<void>()) as Response;
  }
}
