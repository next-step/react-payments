import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardAdd } from '@/pages/CardAdd/hooks'
import { useCardInfo } from '@/pages/hooks'

import CardForm from './CardForm'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm',
  component: CardForm,
} as ComponentMeta<typeof CardForm>

const Template: ComponentStory<typeof CardForm> = () => {
  const { handleExpiredDate, handleOwner, handlePassword, handleSecurityCode } = useCardInfo()

  const { passwordRef, securityCodeRef, expiredDateRef, ownerRef } = useCardAdd()

  return (
    <div className="root">
      <div className="app">
        <CardForm>
          {/* <CardForm.CardNumbers numbersRef={numbersRef} handleChange={handleNumber} /> */}
          <CardForm.CardExpiredDate expiredDateRef={expiredDateRef} handleChange={handleExpiredDate} />
          <CardForm.CardOwner ownerRef={ownerRef} handleChange={handleOwner} />
          <CardForm.CardSecurityCode securityCodeRef={securityCodeRef} handleChange={handleSecurityCode} />
          <CardForm.CardPassword passwordRef={passwordRef} handleChange={handlePassword} />
        </CardForm>
      </div>
    </div>
  )
}

export const basic = Template.bind({})
