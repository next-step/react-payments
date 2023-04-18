import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton } from '@/components/button'
import { PreviewCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { NavigationButtonWithValidation } from '@/pages/CardAdd/components'
import { CardForm } from '@/pages/CardAdd/components/CardForm'
import { useCardAdd } from '@/pages/CardAdd/hooks'
import { useCardInfo } from '@/pages/hooks'

import CardAdd from './CardAdd'

export default {
  title: '페이먼츠 미션/Pages/CardAdd',
  component: CardAdd,
} as ComponentMeta<typeof CardAdd>

const Template: ComponentStory<typeof CardAdd> = () => {
  const { handleNumber, handleExpiredDate, handleOwner, handlePassword, handleSecurityCode } = useCardInfo()
  const {
    numbersRef,
    passwordRef,
    expiredDateRef,
    ownerRef,
    securityCodeRef,
    openValidToast,
    setOpenValidToast,
    onBeforeNavigate,
    isValidCardInfo,
  } = useCardAdd()

  return (
    <div className="root">
      <div className="app">
        <PageTitle title="카드 추가" buttonElement={<BackButton />} />
        <PreviewCard />
        <CardForm>
          <CardForm.CardNumbers numbersRef={numbersRef} nextRef={expiredDateRef.first} handleChange={handleNumber} />
          <CardForm.CardExpiredDate expiredDateRef={expiredDateRef} handleChange={handleExpiredDate} />
          <CardForm.CardOwner ownerRef={ownerRef} handleChange={handleOwner} />
          <CardForm.CardSecurityCode
            securityCodeRef={securityCodeRef}
            nextRef={passwordRef.first}
            handleChange={handleSecurityCode}
          />
          <CardForm.CardPassword passwordRef={passwordRef} handleChange={handlePassword} />
        </CardForm>
        <NavigationButtonWithValidation
          to="/card-completed"
          text="다음"
          openValidToast={openValidToast}
          setOpenValidToast={setOpenValidToast}
          onBeforeNavigate={onBeforeNavigate}
          isNavigationEnabled={isValidCardInfo}
        />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
