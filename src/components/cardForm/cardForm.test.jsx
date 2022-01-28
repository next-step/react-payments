import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import {
  InputCardNumber,
  InputCardNumberAnonymous,
  InputMonth,
  InputYear,
  InputCvc,
  InputPassword,
  InputUserName,
} from './cardForm.stories'
import '@testing-library/jest-dom'

const inputTest = ({ description, Elem, inputTestId, invalidValues, validValues }) => {
  describe(description, () => {
    let formElem, inputElem
    beforeAll(() => {
      const { getByTestId } = render(<Elem {...Elem.args} />)
      formElem = getByTestId('form')
      inputElem = getByTestId(inputTestId)
    })
    test('validation test', () => {
      expect(inputElem).toBeInTheDocument()
      invalidValues.forEach(val => {
        fireEvent.change(inputElem, { target: { value: val } })
        expect(inputElem).toHaveValue(val)
        expect(formElem).toBeInvalid()
      })
      validValues.forEach(val => {
        fireEvent.change(inputElem, { target: { value: val } })
        expect(inputElem).toHaveValue(val)
        expect(formElem).toBeValid()
      })
    })
  })
}

describe('CardForm', () => {
  inputTest({
    description: 'InputCardNumber',
    Elem: InputCardNumber,
    inputTestId: 'input-card-number',
    invalidValues: ['1', 'abc', '12345', 'a123'],
    validValues: ['1234', '9999', '0000'],
  })

  inputTest({
    description: 'InputCardNumberAnonymous',
    Elem: InputCardNumberAnonymous,
    inputTestId: 'input-card-number',
    invalidValues: ['1', 'abc', '12345', 'a123'],
    validValues: ['1234', '9999', '0000'],
  })

  inputTest({
    description: 'InputMonth',
    Elem: InputMonth,
    inputTestId: 'input-month',
    invalidValues: ['0', '13', 'a', '5'],
    validValues: ['01', '08', '12'],
  })

  inputTest({
    description: 'InputYear',
    Elem: InputYear,
    inputTestId: 'input-year',
    invalidValues: ['1', 'ab', '21'],
    validValues: ['22', '99'],
  })

  inputTest({
    description: 'InputCvc',
    Elem: InputCvc,
    inputTestId: 'input-cvc',
    invalidValues: ['1', 'ab5', '21'],
    validValues: ['223', '997'],
  })

  inputTest({
    description: 'InputPassword',
    Elem: InputPassword,
    inputTestId: 'input-password',
    invalidValues: ['a', 'c'],
    validValues: ['0', '9'],
  })

  inputTest({
    description: 'InputUserName',
    Elem: InputUserName,
    inputTestId: 'input-user-name',
    invalidValues: [],
    validValues: ['abc', 'abcdefghi jklmn opqrs'],
  })
})
