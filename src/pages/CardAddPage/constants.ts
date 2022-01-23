export type SerialNums = {
  [key in 'first' | 'second' | 'third' | 'fourth']: string
}

export type Password = {
  [key in 'first' | 'second']: string
}

export const SERIAL_NUMS: SerialNums = {
  first: '',
  second: '',
  third: '',
  fourth: '',
}

export const PASSWORD: Password = {
  first: '',
  second: '',
}
