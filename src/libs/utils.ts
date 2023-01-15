export const flip = <T extends string, P extends string>(data: Record<T, P>): Record<P, T> =>
  Object.fromEntries(Object.entries(data).map(([key, value]) => [value, key]));
