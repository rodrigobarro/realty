import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID";
import { IDomainEvent } from "../../../../core/domain/events/IDomainEvent";
import { Account } from "../account";

export class AccountCreatedEvent implements IDomainEvent {
  public dateTimeOccurred: Date;
  public account: Account;

  constructor(account: Account) {
    this.dateTimeOccurred = new Date();
    this.account = account;
  }

  getAggregateId(): UniqueEntityID {
    return this.account.id;
  }
}
