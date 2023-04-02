export function entryObject<T extends { [key: string | number | symbol]: unknown }>(obj: T): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}
