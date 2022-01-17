import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { Card } from 'src/types/card'

import CardExpireDateInput from '.'

export default {
  title: '카드등록페이지/CardExpireDateInput',
  component: CardExpireDateInput,
} as ComponentMeta<typeof CardExpireDateInput>

const Template: ComponentStory<typeof CardExpireDateInput> = () => {
  const [cardExpireDate, setCardExpireDate] = useState<Card['expireDate']>({ month: '', year: '' })

  return <CardExpireDateInput cardExpireDate={cardExpireDate} setCardExpireDate={setCardExpireDate} />
}

export const Index = Template.bind({})
