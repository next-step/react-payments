import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useRef } from 'react'

import { BackButton, NavigationTextButton } from '@/components/button'
import { Card, BasicCardPart } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { CardForm } from '@/pages/card-add/card-form'
import { useCardInfo } from '@/pages/hooks'

import CardAdd from './CardAdd'

export default {
  title: '페이먼츠 미션/Pages/CardAdd',
  component: CardAdd,
} as ComponentMeta<typeof CardAdd>

const Template: ComponentStory<typeof CardAdd> = () => {
  const { cardInfo, handleNumber, handleExpiredDate, handleOwner } = useCardInfo()

  const firstPasswordRef = useRef<HTMLInputElement>(null)
  const secondPasswordRef = useRef<HTMLInputElement>(null)
  const passwordRef = { first: firstPasswordRef, second: secondPasswordRef }

  const securityCodeRef = useRef<HTMLInputElement>(null)

  const {
    cardNumbers: { first, second, third, fourth },
    owner,
    expiredMonth,
    expiredYear,
  } = cardInfo

  return (
    <div className="root">
      <div className="app">
        <PageTitle title="카드 추가" buttonElement={<BackButton />} />
        <Card>
          <BasicCardPart
            cardNumbers={`${first} - ${second} - ${third} - ${fourth}`}
            cardOwner={owner}
            cardExpiredDate={`${expiredMonth} / ${expiredYear}`}
          />
        </Card>
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
        <NavigationTextButton to="/card-completed" text="다음" />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
