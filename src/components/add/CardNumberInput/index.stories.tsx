import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { Card } from 'src/types/card'

import CardNumberInput from '.'

export default {
  title: '카드등록페이지/CardNumberInput',
  component: CardNumberInput,
} as ComponentMeta<typeof CardNumberInput>

const Template: ComponentStory<typeof CardNumberInput> = () => {
  const [cardNumber, setCardNumber] = useState<Card['number']>(['', '', '', ''])

  return <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
}

export const Index = Template.bind({})
