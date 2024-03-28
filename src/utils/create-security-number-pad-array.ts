interface PickRandomNumbersParams {
  min?: number
  max: number
  pickCount: number
  exceptions?: number[]
}

const pickRandomNumbers = ({
  min = 0,
  max,
  pickCount,
  exceptions = [],
}: PickRandomNumbersParams) => {
  const result: number[] = []
  while (result.length < pickCount) {
    const randomNumber = Math.floor(Math.random() * max) + min
    if (!result.includes(randomNumber) && !exceptions.includes(randomNumber)) {
      result.push(randomNumber)
    }
  }
  return result
}

export interface CreateRandomNumberArrayParams {
  numberPadCount?: number
  totalPadCount?: number
}

export const EMPTY = 'EMPTY'
export const DELETE = 'DELETE'

export type PadValue = number | typeof EMPTY | typeof DELETE

export const createSecurityNumberPadArray = ({
  numberPadCount = 10,
  totalPadCount = 15,
}: CreateRandomNumberArrayParams): PadValue[] => {
  const resultArray: PadValue[] = Array.from({
    length: totalPadCount,
  })
  const randomEmptyIndex = pickRandomNumbers({
    min: 0,
    max: totalPadCount - 1,
    pickCount: totalPadCount - numberPadCount - 1,
  })
  const randomNumberIndex = pickRandomNumbers({
    min: 0,
    max: totalPadCount - 1,
    pickCount: numberPadCount,
    exceptions: randomEmptyIndex,
  })

  randomEmptyIndex.forEach(val => (resultArray[val] = EMPTY))
  randomNumberIndex.forEach((val, idx) => (resultArray[val] = idx))
  resultArray[resultArray.length - 1] = DELETE
  return resultArray
}
