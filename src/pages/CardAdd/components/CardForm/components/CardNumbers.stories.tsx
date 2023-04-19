import { Meta, ComponentStory } from '@storybook/react'

import { CardDecorator } from '@/decorator'
import { CardNumbersOrder } from '@/pages/CardAdd/components/CardForm/types'
import { useCardAdd } from '@/pages/CardAdd/hooks'

import CardNumbers from './CardNumbers'

export default {
  title: 'Components/CardForm/CardNumbers',
  component: CardNumbers,
  decorators: [CardDecorator],
} as Meta

const Template: ComponentStory<typeof CardNumbers> = () => {
  const { numbersRef, expiredDateRef } = useCardAdd()
  const onFocusChange = (order: CardNumbersOrder) => {
    numbersRef[order].current?.focus()
  }

  return <CardNumbers numbersRef={numbersRef} nextRef={expiredDateRef.first} onFocusChange={onFocusChange} />
}

export const Default = Template.bind({})
