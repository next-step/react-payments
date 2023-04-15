import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useRef } from 'react'

import { useCardInfo } from '@/pages/hooks'

import CardForm from './CardForm'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm',
  component: CardForm,
} as ComponentMeta<typeof CardForm>

const Template: ComponentStory<typeof CardForm> = () => {
  const { cardInfo, handleNumber, handleExpiredDate, handleOwner } = useCardInfo()

  const firstPasswordRef = useRef<HTMLInputElement>(null)
  const secondPasswordRef = useRef<HTMLInputElement>(null)
  const passwordRef = { first: firstPasswordRef, second: secondPasswordRef }

  const securityCodeRef = useRef<HTMLInputElement>(null)

  return (
    <div className="root">
      <div className="app">
        <CardForm>
          <CardForm.CardNumbers numbers={cardInfo.cardNumbers} handleChange={handleNumber} />
          <CardForm.CardExpiredDate
            expiredYear={cardInfo.expiredYear}
            expiredMonth={cardInfo.expiredMonth}
            handleChange={handleExpiredDate}
          />
          <CardForm.CardOwner owner={cardInfo.owner} handleChange={handleOwner} />
          <CardForm.CardSecurityCode securityCodeRef={securityCodeRef} />
          <CardForm.CardPassword passwordRef={passwordRef} />
        </CardForm>
      </div>
    </div>
  )
}

export const basic = Template.bind({})
