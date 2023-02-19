const pick = <T>(obj: T, keys: (keyof T)[]): Partial<T> => {
  const result: Partial<T> = {};

  keys.forEach(key => {
    result[key] = obj[key];
  });

  return result || {};
};

export { pick };
