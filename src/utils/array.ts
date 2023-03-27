export function checkIsArrayLast(array: any[], index: number) {
  return index >= array.length - 1;
}

export function createArray<T>(arrayLength: number, callback: (el: T, index: number) => T): T[] {
  return new Array(arrayLength).fill(1).map(callback);
}
