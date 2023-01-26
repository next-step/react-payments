export const flip = <T extends string, P extends string>(data: Record<T, P>): Record<P, T> =>
  Object.fromEntries(Object.entries(data).map(([key, value]) => [value, key]));

export const camelize = (s: string) => s.replace(/-./g, (x) => x[1].toUpperCase());

export const condIndicator = (flag: boolean, indicator = ' - ') => flag && indicator;

export const splitToCount = (targetString: string, index = 4) => {
  return [targetString.substring(0, index), targetString.substring(index)];
};
