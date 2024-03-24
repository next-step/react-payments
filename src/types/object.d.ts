export {}

declare global {
  type KeyOf<T> = keyof T
  type ValueOf<T> = T extends readonly any[] ? T[number] : T[keyof T]

  interface ObjectConstructor {
    keys<T = string>(o: object): T[]
  }
}
