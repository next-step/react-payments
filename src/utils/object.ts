type ObjectType<T> = { [key: string]: Array<T> };

export function createObjectWithArrayProps<T>() {
  const object: ObjectType<T> = {};

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

export function mapObjectValues<T, K extends { [key: string | symbol]: unknown }>(
  object: K,
  mapCallback: (value: K[keyof K]) => T
): Record<keyof K, T> {
  return Object.entries(object).reduce((prev, [key, val]) => {
    const k = key as keyof K;
    prev[k] = mapCallback(val as K[keyof K]);
    return prev;
  }, {} as Record<keyof K, T>);
}

export function createUpdatedObject<T extends { [key: string]: any }, K extends keyof T>(
  object: T,
  key: K,
  newValue: T[K]
) {
  const newObject = { ...object };
  newObject[key] = newValue;
  return newObject;
}
