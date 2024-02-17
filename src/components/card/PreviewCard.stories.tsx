import { ComponentStory, Meta } from '@storybook/react'

import { EmptyCard } from '@/components/card'
import { CardDecorator } from '@/decorator'
import { CardInfomation, getCardExpiredDateDisplay, getCardNumbersDisplay } from '@/domain'

import PreviewCard from './PreviewCard'

export default {
  title: 'Components/Card/PreviewCard',
  component: PreviewCard,
  decorators: [CardDecorator],
} as Meta

const Template: ComponentStory<typeof PreviewCard> = (args: CardInfomation) => {
  const {
    cardNumbers: { first, second, third, fourth },
    owner,
    expiredYear,
    expiredMonth,
    cardType: { name, bg, color },
  } = args

  return (
    <EmptyCard backgroundColor={bg} color={color}>
      <div className="card-top">
        <p className="font-sm">{name}</p>
      </div>
      <div className="card-middle">
        <div className="small-card__chip" />
        <div className="card-number">
          <span>{getCardNumbersDisplay({ first, second, third, fourth })}</span>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__info">
          <span className="card-text">{owner}</span>
          <span className="card-text">{getCardExpiredDateDisplay({ expiredMonth, expiredYear })}</span>
        </div>
      </div>
    </EmptyCard>
  )
}

// Todo: 이렇게 Mock 데이터로 넣는 게 맞는지? 아니 Context를 활용할 수 있는 방법은 없는지?
const mockData = {
  하얀카드: {
    cardNumbers: { first: '4321', second: '8765', third: '2109', fourth: '6543' },
    owner: '김하얀',
    expiredYear: '2013',
    expiredMonth: '07',
    cardType: {
      name: '하얀카드',
      color: '#000000',
      bg: '#F5F5F5',
    },
  },
  파란카드: {
    cardNumbers: { first: '4321', second: '8765', third: '2109', fourth: '6543' },
    owner: '이파랑',
    expiredYear: '2023',
    expiredMonth: '07',
    cardType: {
      name: '파란카드',
      color: '#ffffff',
      bg: '#162bb1',
    },
  },
  빨간카드: {
    cardNumbers: { first: '4321', second: '8765', third: '2109', fourth: '6543' },
    owner: '최빨강',
    expiredYear: '2023',
    expiredMonth: '07',
    cardType: {
      name: '빨간카드',
      color: '#ffffff',
      bg: '#932929',
    },
  },
  초록카드: {
    cardNumbers: { first: '4321', second: '8765', third: '2109', fourth: '6543' },
    owner: '강초록',
    expiredYear: '2023',
    expiredMonth: '07',
    cardType: {
      name: '초록카드',
      color: '#000000',
      bg: '#54cb25',
    },
  },
  에메랄드카드: {
    cardNumbers: { first: '4321', second: '8765', third: '2109', fourth: '6543' },
    owner: '박에메랄드',
    expiredYear: '2023',
    expiredMonth: '07',
    cardType: {
      name: '에메랄드카드',
      color: '#ffffff',
      bg: '#20d0ad',
    },
  },
  분홍카드: {
    cardNumbers: { first: '4321', second: '8765', third: '2109', fourth: '6543' },
    owner: '정분홍',
    expiredYear: '2023',
    expiredMonth: '07',
    cardType: {
      name: '분홍카드',
      color: '#ffffff',
      bg: '#d320c7',
    },
  },
  보라카드: {
    cardNumbers: { first: '4321', second: '8765', third: '2109', fourth: '6543' },
    owner: '진보라',
    expiredYear: '2023',
    expiredMonth: '07',
    cardType: {
      name: '보라카드',
      color: '#ffffff',
      bg: '#7c1ddb',
    },
  },
  주황카드: {
    cardNumbers: { first: '4321', second: '8765', third: '2109', fourth: '6543' },
    owner: '장주황',
    expiredYear: '2023',
    expiredMonth: '07',
    cardType: {
      name: '주황카드',
      color: '#ffffff',
      bg: '#e1860f',
    },
  },
}

export const 하얀카드 = Template.bind({})
하얀카드.args = mockData['하얀카드']

export const 파란카드 = Template.bind({})
파란카드.args = mockData['파란카드']

export const 빨간카드 = Template.bind({})
빨간카드.args = mockData['빨간카드']

export const 초록카드 = Template.bind({})
초록카드.args = mockData['초록카드']

export const 에메랄드카드 = Template.bind({})
에메랄드카드.args = mockData['에메랄드카드']

export const 분홍카드 = Template.bind({})
분홍카드.args = mockData['분홍카드']

export const 보라카드 = Template.bind({})
보라카드.args = mockData['보라카드']

export const 주황카드 = Template.bind({})
주황카드.args = mockData['주황카드']
