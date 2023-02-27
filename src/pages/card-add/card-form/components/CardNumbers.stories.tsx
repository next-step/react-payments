import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardInfo } from '@/pages/card-add/card-form/hooks'

import CardNumbers from './CardNumbers'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardNumbers',
  component: CardNumbers,
} as ComponentMeta<typeof CardNumbers>

const Template: ComponentStory<typeof CardNumbers> = (props) => {
  const { cardInfo, handleNumber } = useCardInfo()
  return (
    <div className="root">
      <div className="app">
        <CardNumbers {...props} numbers={cardInfo.cardNumbers} handleChange={handleNumber} />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
