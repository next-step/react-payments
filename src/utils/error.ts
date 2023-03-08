export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
export const reportError = (error: unknown) => {
  if (error instanceof ValidationError) {
    alert(error.message);
  }
};
