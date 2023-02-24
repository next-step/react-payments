import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardInfo } from '@/pages/card-add/card-form/hooks'

import CardPassword from './CardPassword'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardPassword',
  component: CardPassword,
} as ComponentMeta<typeof CardPassword>

const Template: ComponentStory<typeof CardPassword> = (props) => {
  const { cardInfo, handlePassword } = useCardInfo()
  return (
    <div className="root">
      <div className="app">
        <CardPassword {...props} password={cardInfo.password} handleChange={handlePassword} />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
