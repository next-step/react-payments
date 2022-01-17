import { ComponentStory, ComponentMeta } from '@storybook/react'
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
