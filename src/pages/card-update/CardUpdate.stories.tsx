import { withKnobs, text } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton, NavigationTextButton } from '@/components/button'
import { PageTitle } from '@/components/layouts'

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
  const { nicknameRef } = useCardUpdate()

  const cardNumbers = text('name', '1111-2222-3333-4444')
  const cardExpiredDate = text('expiredDate', '12/31')
  const cardOwner = text('owner', '리액트')
  const cardNickname = text('nickname', 'TDD')

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <PageTitle buttonElement={<BackButton />} addtionalClassName="mb-10" title="카드 목록으로 돌아가기" />
        </div>
        <div className="card-box">
          <div className="big-card">
            <div className="card-top">
              <span className="card-text__big">클린카드</span>
              <button type="button" className="card-text">
                카드삭제
              </button>
            </div>
            <div className="card-middle">
              <div className="big-card__chip" />
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text__big">{cardNumbers}</span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text__big">{cardOwner}</span>
                <span className="card-text__big">{cardExpiredDate}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="input-container flex-center w-100">
          <input
            ref={nicknameRef}
            defaultValue={cardNickname}
            className="input-underline w-75"
            type="text"
            placeholder="카드 별칭 (선택)"
            maxLength={10}
          />
        </div>
        <NavigationTextButton additionalClassNames="mt-50" to="/" text="다음" />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
