export interface Repository<T> {
    save(t: T): Promise<T>;
}