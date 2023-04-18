import { withKnobs } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton } from '@/components/button'
import { CardDetailsForm } from '@/components/layouts'

import CardCompleted from './CardCompleted'
import { useCardCompleted } from './hooks'

/**
 * onClickDeleteButton, handlePreNavigation도 테스트하려면?
 */
export default {
  title: '페이먼츠 미션/Pages/CardCompleted',
  component: CardCompleted,
  decorators: [withKnobs],
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

  // const cardNumbers = text('name', '1111-2222-3333-4444')
  // const cardExpiredDate = text('expiredDate', '12/31')
  // const cardOwner = text('owner', '리액트')
  // const cardNickname = text('nickname', 'TDD')
  // const cardName = text('name', '클린코드')

  return (
    <div className="root">
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
    </div>
  )
}

export const basic = Template.bind({})
