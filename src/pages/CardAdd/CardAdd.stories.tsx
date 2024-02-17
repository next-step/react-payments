import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton } from '@/components/button'
import { PreviewCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { CardDecorator } from '@/decorator'
import { NavigationButtonWithValidation } from '@/pages/CardAdd/components'
import { CardForm } from '@/pages/CardAdd/components/CardForm'
import { useCardAdd } from '@/pages/CardAdd/hooks'

import CardAdd from './CardAdd'

export default {
  title: 'Pages/CardAdd',
  component: CardAdd,
  decorators: [CardDecorator],
} as ComponentMeta<typeof CardAdd>

const Template: ComponentStory<typeof CardAdd> = () => {
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
    <>
      <PageTitle title="카드 추가" buttonElement={<BackButton />} />
      <PreviewCard />
      <CardForm>
        <CardForm.CardNumbers numbersRef={numbersRef} nextRef={expiredDateRef.first} />
        <CardForm.CardExpiredDate expiredDateRef={expiredDateRef} />
        <CardForm.CardOwner ownerRef={ownerRef} />
        <CardForm.CardSecurityCode securityCodeRef={securityCodeRef} nextRef={passwordRef.first} />
        <CardForm.CardPassword passwordRef={passwordRef} />
      </CardForm>
      <NavigationButtonWithValidation
        to="/card-completed"
        text="다음"
        openValidToast={openValidToast}
        setOpenValidToast={setOpenValidToast}
        onBeforeNavigate={onBeforeNavigate}
        isNavigationEnabled={isValidCardInfo}
      />
    </>
  )
}

export const Default = Template.bind({})
