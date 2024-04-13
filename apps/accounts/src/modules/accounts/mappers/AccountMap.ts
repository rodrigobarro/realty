import { UniqueEntityID } from "../../../core/domain/UniqueEntityID";
import { Mapper } from "../../../core/infra/Mapper";
import { Account, AccountEmail, AccountPhone } from "../domain/account";

export class AccountMapper extends Mapper<Account> {
  public static toPersistence(account: Account): any {
    return {
      account_id: account.id.toString(),
      account_name: account.name,
      account_email: account.email,
      account_phone: account.phone,
    };
  }

  public static toDomain(raw: any): Account | any {
    const accountEmailOrError = AccountEmail.create(raw.account_email);
    const accountPhoneOrError = AccountPhone.create(raw.user_password);

    const accountOrError = Account.create(
      {
        name: raw.name,
        email: accountEmailOrError.getValue(),
        phone: accountPhoneOrError.getValue(),
      },
      new UniqueEntityID(raw.account_id)
    );

    accountOrError.isFailure ? console.log(accountOrError.error) : "";

    return accountOrError.isSuccess ? accountOrError.getValue() : null;
  }
}
