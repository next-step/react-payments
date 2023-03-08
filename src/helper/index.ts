import { createContext, useContext } from "react";

import { CONTEXT_ERROR_MESSAGES } from "@/constants/messages/error";
import { BaseError, ValidationError } from "@/services/errors";
import { GeneralFunction } from "@/types";

export function isNumber(variable: string) {
  return variable !== null && !Number.isNaN(Number(variable));
}

export function processError(error: unknown, errorCallback?: GeneralFunction) {
  if (error instanceof BaseError) {
    if (error instanceof ValidationError) {
      errorCallback?.(error);
      alert(error.message);
    }
  }
}

export function tryCatch(fn: GeneralFunction, errorCallback?: GeneralFunction) {
  try {
    const result = fn();

    return {
      result,
      error: null,
    };
  } catch (error) {
    processError(error, errorCallback);

    return {
      result: null,
      error,
    };
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
