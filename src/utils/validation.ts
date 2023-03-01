export const isObjectComplete = <T extends {}>(x: T): boolean => {
  if (Array.isArray(x)) {
    return x.every((value) => !!value);
  }

  return Object.values(x).every((value) => {
    if (Array.isArray(value)) {
      return isObjectComplete(value);
    }

    return !!value;
  });
};
