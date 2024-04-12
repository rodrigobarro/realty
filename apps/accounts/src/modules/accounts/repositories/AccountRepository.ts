import { Account } from "../domain/account";
import { AccountMapper } from "../mappers/AccountMap";

export interface IAccountRepository {
  save(user: Account): Promise<void>;
}

export class AccountRepository implements IAccountRepository {
  public async save(user: Account): Promise<void> {
    //const BaseUserModel = this.models.BaseUser;
    const rawUser = AccountMapper.toPersistence(user);

    try {
      //await BaseUserModel.create(rawUser);
    } catch (err) {
      console.log(err);
    }
  }
}
