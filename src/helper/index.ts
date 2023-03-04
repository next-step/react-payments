import { createContext, useContext } from "react";

import { CONTEXT_ERROR_MESSAGES } from "@/constants/messages/error";
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

export const contextFactory = <T>() => {
  const context = createContext<T | null>(null);

  const useCtx = () => {
    const ctx = useContext(context);
    if (!ctx) throw new Error(CONTEXT_ERROR_MESSAGES.UNDEFINED_CONTEXT);

    return ctx;
  };

  return [context, useCtx] as const;
};
