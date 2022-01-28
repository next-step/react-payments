import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { CardNew, CardEmpty, CardBig, CardSmall, CardDeletable } from './card.stories'
import '@testing-library/jest-dom'

const cardData = {
  cardName: '그린카드',
  cardNumber: '1234 - 1234 - **** - ****',
  expired: '10 / 24',
  userName: 'JAENAM',
  alias: '법카',
}

describe('Card', () => {
  const cardRenderTest = ({ title, Component, wrapperTestId, cardData, cardClassname }) => {
    it(title, () => {
      const { getByTestId } = render(<Component {...Component.args} />)
      const expectedCard = getByTestId(wrapperTestId)
      if (typeof cardData === 'string') {
        expect(expectedCard).toHaveTextContent(cardData)
      } else {
        Object.values(cardData).forEach(val => {
          expect(expectedCard).toHaveTextContent(val)
        })
      }
      expect(getByTestId('card')).toHaveClass(cardClassname)
    })
  }
  cardRenderTest({
    title: 'render CardNew',
    Component: CardNew,
    wrapperTestId: 'card',
    cardData: '+',
    cardClassname: 'empty-card',
  })
  cardRenderTest({
    title: 'render CardEmpty',
    Component: CardEmpty,
    wrapperTestId: 'card',
    cardData: 'MM / YY',
    cardClassname: 'empty-card',
  })
  cardRenderTest({
    title: 'render CardBig',
    Component: CardBig,
    wrapperTestId: 'card-wrap',
    cardData,
    cardClassname: 'big-card',
  })
  cardRenderTest({
    title: 'render CardSmall',
    Component: CardSmall,
    wrapperTestId: 'card-wrap',
    cardData,
    cardClassname: 'small-card',
  })
  cardRenderTest({
    title: 'render CardDeletable',
    Component: CardDeletable,
    wrapperTestId: 'card-deletable',
    cardData,
    cardClassname: 'small-card',
  })
})
