import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardAdd } from '@/pages/CardAdd/hooks'
import { useCardInfo } from '@/pages/hooks'

import CardNumbers from './CardNumbers'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardNumbers',
  component: CardNumbers,
} as ComponentMeta<typeof CardNumbers>

const Template: ComponentStory<typeof CardNumbers> = (props) => {
  const { handleNumber } = useCardInfo()
  const { numbersRef } = useCardAdd()
  return (
    <div className="root">
      <div className="app">{/* <CardNumbers {...props} numbersRef={numbersRef} handleChange={handleNumber} /> */}</div>
    </div>
  )
}

export const basic = Template.bind({})
