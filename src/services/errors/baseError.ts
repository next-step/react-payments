export default class BaseError<T extends string> extends Error {
  constructor({ name, message }: { name: T; message: string }) {
    super();
    this.name = name;
    this.message = message;
  }
}
