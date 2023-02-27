import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardInfo } from '@/pages/card-add/card-form/hooks'

import CardSecurityCode from './CardSecurityCode'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardSecurityCode',
  component: CardSecurityCode,
} as ComponentMeta<typeof CardSecurityCode>

const Template: ComponentStory<typeof CardSecurityCode> = (props) => {
  const { cardInfo, handleSecurityCode } = useCardInfo()
  return (
    <div className="root">
      <div className="app">
        <CardSecurityCode {...props} securityCode={cardInfo.securityCode} handleChange={handleSecurityCode} />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
