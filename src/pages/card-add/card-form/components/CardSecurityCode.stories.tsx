import { ComponentMeta, ComponentStory } from '@storybook/react'

import CardSecurityCode from './CardSecurityCode'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardSecurityCode',
  component: CardSecurityCode,
} as ComponentMeta<typeof CardSecurityCode>

const Template: ComponentStory<typeof CardSecurityCode> = () => {
  return (
    <div className="root">
      <div className="app">
        <CardSecurityCode />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
