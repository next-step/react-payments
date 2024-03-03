import { createDisplayCardCode } from './create-display-card-code'

describe('createCardNumber test', () => {
  test('4자리 이하로 주어지면 문자열 그대로를 반환한다', () => {
    expect(
      createDisplayCardCode({
        value: '1234',
        maskedLastDigit: 8,
      }),
    ).toBe('1234')
  })

  test('5 ~ 8자리의 input이 주어지면 seperator가 반환한다', () => {
    expect(
      createDisplayCardCode({
        value: '12345678',
        maskedLastDigit: 8,
      }),
    ).toBe('1234 - 5678')
  })

  test('9자리 이상의 value가 주어지고, maxDigit가 16인 경우 9번째 자리부터는 마스킹 처리 된다', () => {
    expect(
      createDisplayCardCode({
        value: '1234567899999999',
        maskedLastDigit: 8,
        maxDigit: 16,
      }),
    ).toBe('1234 - 5678 - **** - ****')

    expect(
      createDisplayCardCode({
        value: '1234567899999999',
        maskedLastDigit: 4,
        maxDigit: 16,
      }),
    ).toBe('1234 - 5678 - 9999 - ****')
  })
})
