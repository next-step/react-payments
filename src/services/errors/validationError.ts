import BaseError from "./baseError";

type ValidationErrorName = "INPUT_VALIDATION_ERROR" | "FORM_VALIDATION_ERROR";

export default class ValidationError extends BaseError<ValidationErrorName> {
  constructor(errorInfo: { name: ValidationErrorName; message: string }) {
    super(errorInfo);
  }
}
