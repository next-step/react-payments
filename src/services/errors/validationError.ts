export default class ValidationError extends Error {
  constructor(readonly message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
