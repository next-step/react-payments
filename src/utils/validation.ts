export const assert = (predicate: boolean, message: string) => {
  if (!predicate) {
    throw new Error(message);
  }
};
