type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type zeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type MM = `0${oneToNine}` | `1${0 | 1 | 2}`
export type YY = `${zeroToNine}${zeroToNine}`

export type CardNumber = `${zeroToNine}${zeroToNine}${zeroToNine}${zeroToNine}`
