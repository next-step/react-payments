import { withKnobs } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton } from '@/components/button'
import { CardDetailsForm } from '@/components/layouts'
import { CardDecorator } from '@/decorator'

import CardUpdate from './CardUpdate'
import { useCardUpdate } from './hooks'

/**
 * onClickDeleteButton, handlePreNavigation도 테스트하려면?
 */
export default {
  title: 'Pages/CardUpdate',
  component: CardUpdate,
  decorators: [CardDecorator, withKnobs],
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

  return (
    <>
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
    </>
  )
}

export const Default = Template.bind({})
