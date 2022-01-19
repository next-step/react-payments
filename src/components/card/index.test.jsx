import React from 'react'
import { render } from '@testing-library/react'
import { CardNew, CardEmpty, CardBig, CardSmall } from './index.stories'
import '@testing-library/jest-dom'

const cardData = {
  cardName: '그린카드',
  cardNumber: '1234 - 1234 - **** - ****',
  expired: '10 / 24',
  userName: 'JAENAM',
  alias: '법카',
}

describe('Card', () => {
  it('render CardNew', () => {
    const { getByTestId } = render(<CardNew {...CardNew.args} />)
    const expectedCard = getByTestId('card')
    expect(expectedCard).toHaveTextContent('+')
    expect(expectedCard).toHaveClass('empty-card')
  })

  it('render CardEmpty', () => {
    const { getByTestId } = render(<CardEmpty {...CardEmpty.args} />)
    const expectedCard = getByTestId('card')
    expect(expectedCard).toHaveTextContent('MM / YY')
    expect(expectedCard).toHaveClass('empty-card')
  })

  it('render CardBig', () => {
    const { getByTestId } = render(<CardBig {...CardBig.args} />)
    const expectedCard = getByTestId('card-wrap')
    Object.values(cardData).forEach(val => {
      expect(expectedCard).toHaveTextContent(val)
    })
    expect(getByTestId('card')).toHaveClass('big-card')
  })
  it('render CardSmall', () => {
    const { getByTestId } = render(<CardSmall {...CardSmall.args} />)
    const expectedCard = getByTestId('card-wrap')
    Object.values(cardData).forEach(val => {
      expect(expectedCard).toHaveTextContent(val)
    })
    expect(getByTestId('card')).toHaveClass('small-card')
  })
})
