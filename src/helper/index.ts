import { ValidationError } from "@/services/errors";
import { ValidationResult } from "@/types";

export function isNumber(variable: string) {
  return variable !== null && !Number.isNaN(Number(variable));
}

export function reportError(error: unknown) {
  if (error instanceof ValidationError) {
    alert(error.message);
  }
}

export function checkValidator<T>(
  value: T,
  validator: (value: T) => ValidationResult,
  hook?: (...args: any[]) => any
) {
  const result = validator(value);

  try {
    if (!result.success) throw result.error;
    hook?.();
  } catch (error) {
    reportError(error);
  }
}
