import { Account } from "../domain/account";
import { AccountMapper } from "../mappers/AccountMap";
import { MongoClient } from "mongodb";

export interface IAccountRepository {
  save(user: Account): Promise<void>;
}

export class AccountRepository implements IAccountRepository {
  private mongoClient: any;

  constructor() {
    const uri = "mongodb://admin:password@0.0.0.0:27017/?authSource=admin";
    this.mongoClient = new MongoClient(uri);
  }

  public async save(user: Account): Promise<void> {
    const rawAccount = AccountMapper.toPersistence(user);

    try {
      await this.mongoClient
        .db("accounts")
        .collection("accounts")
        .insertOne(rawAccount);
    } catch (err) {
      console.log(err);
    } finally {
      await this.mongoClient.close();
    }
  }
}
