import deepEqual from "deep-equal";

interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  public readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public equals(valueObject?: ValueObject<T>): boolean {
    if (valueObject === null || valueObject === undefined) {
      return false;
    }
    if (valueObject.props === undefined) {
      return false;
    }
    return deepEqual(this.props, valueObject.props);
  }
}
