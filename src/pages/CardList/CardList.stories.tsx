import { withKnobs } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Link } from 'react-router-dom'

import { EmptyCard, SmallCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { CardDecorator } from '@/decorator'
import { getCardNumbersDisplay, getCardExpiredDateDisplay, CardInfomation } from '@/domain'
import { useCardList } from '@/pages/CardList/hooks'

import CardList from './CardList'

interface CardListProps {
  cardList: CardInfomation[]
}

// Todo: 플러스 버튼 눌렀을 때의 인터렉션 추가해야함.
export default {
  title: 'Pages/CardList',
  component: CardList,
  decorators: [CardDecorator, withKnobs],
  argTypes: {
    cardList: {
      control: {
        type: 'object',
      },
    },
  },
} as ComponentMeta<typeof CardList>

const Template: ComponentStory<typeof CardList> = (args: CardListProps) => {
  const { onClickCard } = useCardList()

  const { cardList } = args
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

const CARD_LIST = [
  {
    cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
    name: '하얀카드',
    nickname: '소비카드',
    expiredYear: '26',
    expiredMonth: '11',
    owner: '김하얀',
    securityCode: '123',
    passwords: { first: '1', second: '2' },
    cardType: {
      name: '하얀카드',
      color: '#000000',
      bg: '#e5e5e5',
    },
  },
  {
    cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
    name: '빨간카드',
    nickname: '저축카드',
    expiredYear: '26',
    expiredMonth: '11',
    owner: '최빨강',
    securityCode: '123',
    passwords: { first: '1', second: '2' },
    cardType: {
      name: '빨간카드',
      color: '#ffffff',
      bg: '#932929',
    },
  },
  {
    cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
    name: '파란카드',
    nickname: '포인트카드',
    expiredYear: '26',
    expiredMonth: '11',
    owner: '이파랑',
    securityCode: '123',
    passwords: { first: '1', second: '2' },
    cardType: {
      name: '파란카드',
      color: '#ffffff',
      bg: '#2a5f9e',
    },
  },
]

export const Default = Template.bind({})
Default.args = { cardList: CARD_LIST }
