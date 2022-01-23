import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { Card } from 'src/types/card'

import CardHolderNameInput from '.'

export default {
  title: '카드등록페이지/CardHolderNameInput',
  component: CardHolderNameInput,
} as ComponentMeta<typeof CardHolderNameInput>

const Template: ComponentStory<typeof CardHolderNameInput> = () => {
  const [cardHolderName, setCardHolderName] = useState<Card['holderName']>('')

  return <CardHolderNameInput cardHolderName={cardHolderName} setCardHolderName={setCardHolderName} />
}

export const Index = Template.bind({})
