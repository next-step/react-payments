export const typedKeysOf = <T extends Record<string, any>>(
  obj: T
): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};
