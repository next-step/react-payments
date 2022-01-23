import { expect } from '@storybook/jest'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, screen } from '@storybook/testing-library'
import { useState } from 'react'
import { Card } from 'src/types/card'

import CardCvcInput from '.'

export default {
  title: '카드등록페이지/CardCvcInput',
  component: CardCvcInput,
} as ComponentMeta<typeof CardCvcInput>

const Template: ComponentStory<typeof CardCvcInput> = () => {
  const [cardCvc, setCardCvc] = useState<Card['cvc']>('')

  return <CardCvcInput cardCvc={cardCvc} setCardCvc={setCardCvc} />
}

export const Index = Template.bind({})

Index.play = async () => {
  const cvcInput = screen.getByTestId('cvc')

  expect(screen.queryByText('숫자만 입력가능해요')).toBeNull()

  await userEvent.type(cvcInput, 'abcde', {
    delay: 100,
  })

  await screen.findByText('숫자만 입력가능해요')

  await userEvent.type(cvcInput, '1234', {
    delay: 100,
  })

  expect(screen.queryByText('숫자만 입력가능해요')).toBeNull()
}
