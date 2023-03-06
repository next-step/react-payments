import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton, NavigationTextButton } from '@/components/button'
import { Card, BasicCardPart } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { CardForm } from '@/pages/card-add/card-form'
import { useCardAdd } from '@/pages/card-add/hooks'
import { useCardInfo } from '@/pages/hooks'

import CardAdd from './CardAdd'

export default {
  title: '페이먼츠 미션/Pages/CardAdd',
  component: CardAdd,
} as ComponentMeta<typeof CardAdd>

const Template: ComponentStory<typeof CardAdd> = () => {
  const {
    cardInfo: {
      cardNumbers: { first, second, third, fourth },
      owner,
      expiredMonth,
      expiredYear,
    },
    handleNumber,
    handleExpiredDate,
    handleOwner,
  } = useCardInfo()
  const { numbersRef, passwordRef, securityCodeRef, expiredDateRef, ownerRef } = useCardAdd()

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
          <CardForm.CardNumbers numbersRef={numbersRef} handleChange={handleNumber} />
          <CardForm.CardExpiredDate expiredDateRef={expiredDateRef} handleChange={handleExpiredDate} />
          <CardForm.CardOwner ownerRef={ownerRef} handleChange={handleOwner} />
          <CardForm.CardSecurityCode securityCodeRef={securityCodeRef} />
          <CardForm.CardPassword passwordRef={passwordRef} />
        </CardForm>
        <NavigationTextButton to="/card-completed" text="다음" />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
