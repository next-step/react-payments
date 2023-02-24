import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardInfo } from '@/pages/card-add/card-form/hooks'

import CardOwner from './CardOwner'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardOwner',
  component: CardOwner,
} as ComponentMeta<typeof CardOwner>

const Template: ComponentStory<typeof CardOwner> = (props) => {
  const { cardInfo, handleOwner } = useCardInfo()
  return (
    <div className="root">
      <div className="app">
        <CardOwner {...props} owner={cardInfo.owner} handleChange={handleOwner} />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
