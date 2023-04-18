import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardAdd } from '@/pages/CardAdd/hooks'
import { useCardInfo } from '@/pages/hooks'

import CardSecurityCode from './CardSecurityCode'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardSecurityCode',
  component: CardSecurityCode,
} as ComponentMeta<typeof CardSecurityCode>

const Template: ComponentStory<typeof CardSecurityCode> = () => {
  const { handleSecurityCode } = useCardInfo()
  const { passwordRef, securityCodeRef } = useCardAdd()
  return (
    <div className="root">
      <div className="app">
        <CardSecurityCode
          securityCodeRef={securityCodeRef}
          nextRef={passwordRef.first}
          handleChange={handleSecurityCode}
        />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
