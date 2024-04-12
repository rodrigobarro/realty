import { AggregateRoot } from "../../../core/domain/AggregateRoot";
import { Result } from "../../../core/application/Result";
import { ValueObject } from "../../../core/domain/ValueObject";
import { Guard } from "../../../core/application/Guard";
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID";
import { AccountCreatedEvent } from "./events/AccountCreatedEvent";

interface AccountEmailProperties {
  value: string;
}

export class AccountEmail extends ValueObject<AccountEmailProperties> {
  private constructor(props: AccountEmailProperties) {
    super(props);
  }

  public static create(email: string): Result<AccountEmail> {
    const guardResult = Guard.againstNullOrUndefined(email, "email");

    if (!guardResult.succeeded) {
      return Result.fail<AccountEmail>(guardResult.message);
    } else {
      return Result.ok<AccountEmail>(new AccountEmail({ value: email }));
    }
  }
}
interface AccountPhoneProperties {
  value: string;
}

export class AccountPhone extends ValueObject<AccountPhoneProperties> {
  private constructor(props: AccountPhoneProperties) {
    super(props);
  }

  public static create(phone: string): Result<AccountPhone> {
    const guardResult = Guard.againstNullOrUndefined(phone, "phone");
    if (!guardResult.succeeded) {
      return Result.fail<AccountPhone>(guardResult.message);
    } else {
      return Result.ok<AccountPhone>(new AccountPhone({ value: phone }));
    }
  }
}

type AccountProperties = {
  name: string;
  email: AccountEmail;
  phone: AccountPhone;
};

export class Account extends AggregateRoot<AccountProperties> {
  
    get name(): string {
        return this.props.name;
    }
    
    get email(): AccountEmail {
        return this.props.email;
    }

    get phone(): AccountPhone {
        return this.props.phone;
    }

    private constructor(properties: AccountProperties, id?: UniqueEntityID) {
    super(properties, id);
  }

  public static create(
    props: AccountProperties,
    id?: UniqueEntityID
  ): Result<Account> {
    const guardedProps = [
      { argument: props.name, argumentName: "name" },
      { argument: props.email, argumentName: "email" },
      { argument: props.phone, argumentName: "phone" },
    ];

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);

    if (!guardResult.succeeded) {
      return Result.fail<Account>(guardResult.message);
    } else {
      const account = new Account(props, id);

      const idWasProvided = !!id;

      if (!idWasProvided) {
        account.addDomainEvent(new AccountCreatedEvent(account));
      }

      return Result.ok<Account>(account);
    }
  }
}
