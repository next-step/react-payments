import { withKnobs } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton } from '@/components/button'
import { CardDetailsForm } from '@/components/layouts'

import CardUpdate from './CardUpdate'
import { useCardUpdate } from './hooks'

/**
 * onClickDeleteButton, handlePreNavigation도 테스트하려면?
 */
export default {
  title: '페이먼츠 미션/Pages/CardUpdate',
  component: CardUpdate,
  decorators: [withKnobs],
} as ComponentMeta<typeof CardUpdate>

const Template: ComponentStory<typeof CardUpdate> = () => {
  const {
    nicknameRef,
    cardNumbers,
    cardOwner,
    cardExpiredDate,
    cardName,
    cardNickname,
    cardType,
    onClickDeleteButton,
    handlePreNavigation,
  } = useCardUpdate()

  // const cardNumbers = text('numbers', '1111-2222-3333-4444')
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
          title="카드 목록으로 돌아가기"
        />
        <CardDetailsForm.BigCard
          onClickDeleteButton={onClickDeleteButton}
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
