import { withKnobs } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Link } from 'react-router-dom'

import { EmptyCard, SmallCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { CardDecorator } from '@/decorator'
import { getCardNumbersDisplay, getCardExpiredDateDisplay } from '@/domain'
import { useCardList } from '@/pages/CardList/hooks'

import CardList from './CardList'

export default {
  title: 'Pages/CardList',
  component: CardList,
  decorators: [CardDecorator, withKnobs],
} as ComponentMeta<typeof CardList>

const Template: ComponentStory<typeof CardList> = () => {
  const { cardList, onClickCard } = useCardList()
  return (
    <>
      <PageTitle addtionalClassName="mb-10" title="보유 카드" />
      {cardList?.map((card) => {
        const { cardNumbers, owner, name, nickname, expiredMonth, expiredYear, cardType } = card
        return (
          <div key={card.nickname} onClick={() => onClickCard(card)}>
            <SmallCard
              cardName={name}
              cardNumbers={getCardNumbersDisplay(cardNumbers)}
              cardOwner={owner}
              cardExpiredDate={getCardExpiredDateDisplay({ expiredMonth, expiredYear })}
              cardType={cardType}
            />
            <span className="card-nickname">{nickname}</span>
          </div>
        )
      })}
      <Link to="/card-add" style={{ textDecoration: 'none' }}>
        <EmptyCard>
          <span>+</span>
        </EmptyCard>
      </Link>
    </>
  )
}

export const Default = Template.bind({})
