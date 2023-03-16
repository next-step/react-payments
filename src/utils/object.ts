export function createObjectWithArrayProps<T>() {
  type ObjectType = { [key: string]: Array<T> };
  const object: ObjectType = {};

  return {
    object,
    setProp: (key: string, index: number, value: T) => {
      if (!object[key]) {
        object[key] = [];
      }

      object[key][index] = value;
    },
  };
}

export function mapObjectValue<T, K extends { [key: string | symbol]: unknown }>(
  object: K,
  mapCallback: (value: K[keyof K]) => T
): Record<keyof K, T> {
  return Object.entries(object).reduce((prev, [key, val]) => {
    const k = key as keyof K;
    prev[k] = mapCallback(val as K[keyof K]);
    return prev;
  }, {} as Record<keyof K, T>);
}
