import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { Card } from 'src/types/card'

import CardPasswordInput from '.'

export default {
  title: '카드등록페이지/CardPasswordInput',
  component: CardPasswordInput,
} as ComponentMeta<typeof CardPasswordInput>

const Template: ComponentStory<typeof CardPasswordInput> = () => {
  const [cardPassword, setCardPassword] = useState<Card['password']>(['', ''])

  return <CardPasswordInput cardPassword={cardPassword} setCardPassword={setCardPassword} />
}

export const Index = Template.bind({})
