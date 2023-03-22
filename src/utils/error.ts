export class ValidationError extends Error {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(message: string) {
    super(message);
  }
}
export const reportError = (error: unknown) => {
  if (error instanceof ValidationError) {
    alert(error.message);
  }
};
