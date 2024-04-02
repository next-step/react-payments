import { createSecurityNumberPadArray } from '@/utils/create-security-number-pad-array'

describe('createSecurityNumberPadArray testing', () => {
  const result = createSecurityNumberPadArray(15)

  test('10개의 0부터 9까지의 숫자들을 중복없이 반환한다', () => {
    const onlyNumbers = result.filter(val => typeof val === 'number')
    expect(onlyNumbers.length).toBe(10)
    const resultNumberSet = new Set(onlyNumbers)
    expect(resultNumberSet.size).toBe(10)
    expect(Math.min(...(Array.from(resultNumberSet.keys()) as number[]))).toBe(0)
    expect(Math.max(...(Array.from(resultNumberSet.keys()) as number[]))).toBe(9)
  })

  test('4개의 EMPTY 요소를 반환한다', () => {
    expect(result.filter(v => v === 'EMPTY').length).toBe(4)
  })

  test('마지막 요소로 DELETE를 반환한다', () => {
    expect(result.at(-1)).toBe('DELETE')
  })
})
