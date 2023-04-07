import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton, NavigationButton } from '@/components/button'
import { PreviewCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { CardForm } from '@/pages/CardAdd/components/CardForm'
import { useCardAdd } from '@/pages/CardAdd/hooks'
import { useCardInfo } from '@/pages/hooks'

import CardAdd from './CardAdd'

export default {
  title: '페이먼츠 미션/Pages/CardAdd',
  component: CardAdd,
} as ComponentMeta<typeof CardAdd>

const Template: ComponentStory<typeof CardAdd> = () => {
  const { handleExpiredDate, handleOwner, handlePassword, handleSecurityCode } = useCardInfo()
  const { passwordRef, securityCodeRef, expiredDateRef, ownerRef } = useCardAdd()

  return (
    <div className="root">
      <div className="app">
        <PageTitle title="카드 추가" buttonElement={<BackButton />} />
        <PreviewCard />
        <CardForm>
          {/* <CardForm.CardNumbers numbersRef={numbersRef} handleChange={handleNumber} /> */}
          <CardForm.CardExpiredDate expiredDateRef={expiredDateRef} handleChange={handleExpiredDate} />
          <CardForm.CardOwner ownerRef={ownerRef} handleChange={handleOwner} />
          <CardForm.CardSecurityCode securityCodeRef={securityCodeRef} handleChange={handleSecurityCode} />
          <CardForm.CardPassword passwordRef={passwordRef} handleChange={handlePassword} />
        </CardForm>
        <NavigationButton to="/card-completed" text="다음" />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
