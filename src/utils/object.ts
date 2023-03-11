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
