export abstract class Mapper<DomainEntity> {
  public static toDomain(raw: unknown): unknown {
    throw new Error("Not implemented");
  }
  public static toPersistence(t: unknown): unknown {
    throw new Error("Not implemented");
  }
}
