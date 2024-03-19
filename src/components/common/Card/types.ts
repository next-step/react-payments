type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type zeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type MM = `0${oneToNine}` | `1${0 | 1 | 2}`
type YY = `${zeroToNine}${zeroToNine}`

export type CardNumber = `${number} ${number} ${number} ${number}`
export type CardExpiry = `${MM}/${YY}`
