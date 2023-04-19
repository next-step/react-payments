import { withKnobs } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton } from '@/components/button'
import { CardDetailsForm } from '@/components/layouts'
import { CardDecorator } from '@/decorator'

import CardCompleted from './CardCompleted'
import { useCardCompleted } from './hooks'

/**
 * Todo
 * 1. onClickDeleteButton, handlePreNavigation도 테스트하려면?
 * 2. card 정보 Default에 Mock 데이터 넣기
 */
export default {
  title: 'Pages/CardCompleted',
  component: CardCompleted,
  decorators: [CardDecorator, withKnobs],
} as ComponentMeta<typeof CardCompleted>

const Template: ComponentStory<typeof CardCompleted> = () => {
  const {
    nicknameRef,
    cardNumbers,
    cardOwner,
    cardExpiredDate,
    cardNickname,
    cardName,
    cardType,
    handlePreNavigation,
  } = useCardCompleted()

  return (
    <CardDetailsForm>
      <CardDetailsForm.PageTitle
        buttonElement={<BackButton />}
        addtionalClassName="mb-10"
        title="카드등록이 완료되었습니다."
      />
      <CardDetailsForm.BigCard
        cardNumbers={cardNumbers}
        cardName={cardName}
        cardOwner={cardOwner}
        cardExpiredDate={cardExpiredDate}
        cardType={cardType}
      />
      <CardDetailsForm.CardAliasInput inputRef={nicknameRef} defaultValue={cardNickname} />
      <CardDetailsForm.NavigationButton
        additionalClassNames="mt-50"
        onBeforeNavigate={handlePreNavigation}
        to="/"
        text="다음"
      />
    </CardDetailsForm>
  )
}

export const Default = Template.bind({})
