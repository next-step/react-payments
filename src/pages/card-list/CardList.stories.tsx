import { withKnobs, object } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Link } from 'react-router-dom'

import { SmallCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'

import CardList from './CardList'

export default {
  title: '페이먼츠 미션/Pages/CardList',
  component: CardList,
  decorators: [withKnobs],
} as ComponentMeta<typeof CardList>

const cardList = object('card list', [
  {
    cardNumbers: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
    name: '클린코드1',
    nickname: '리액트1',
    expiredYear: '1',
    expiredMonth: '31',
    owner: '김희열',
    securityCode: '123',
    password: { first: '1', second: '2' },
  },
  {
    cardNumbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
    name: '클린코드2',
    nickname: '리액트2',
    expiredYear: '12',
    expiredMonth: '12',
    owner: '김희열',
    securityCode: '455',
    password: { first: '1', second: '2' },
  },
])

const Template: ComponentStory<typeof CardList> = () => {
  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <PageTitle addtionalClassName="mb-10" title="보유 카드" />
        </div>
        {cardList?.map((card) => {
          const {
            cardNumbers: { first, second, third, fourth },
            owner,
            name,
            nickname,
            expiredMonth,
            expiredYear,
          } = card
          return (
            <div key={card.nickname}>
              <SmallCard
                cardName={name}
                cardNumbers={`${first} - ${second} - ${third} - ${fourth}`}
                cardOwner={owner}
                cardExpiredDate={`${expiredMonth} / ${expiredYear}`}
              />
              <span className="card-nickname">{nickname}</span>
            </div>
          )
        })}
        <Link to="/card-add" style={{ textDecoration: 'none' }}>
          <div className="card-box">
            <div className="empty-card">+</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export const basic = Template.bind({})
