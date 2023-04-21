import { Story, Meta } from '@storybook/react'

import { CardBox } from '@/components/card'
import { CardDecorator } from '@/decorator'

import SmallCard from './SmallCard'

interface SmallCardProps {
  cardName: string
  cardNumbers: string
  cardOwner: string
  cardExpiredDate: string
  cardType?: {
    name: string
    color: string
    bg: string
  }
}

export default {
  title: 'Components/Card/SmallCard',
  component: SmallCard,
  decorators: [CardDecorator],
} as Meta

const Template: Story<SmallCardProps> = ({
  cardName,
  cardNumbers,
  cardOwner,
  cardExpiredDate,
  cardType: { name, color, bg },
}: SmallCardProps) => {
  return (
    <CardBox>
      <div className="small-card" style={{ backgroundColor: bg, color }}>
        <div className="card-top">
          <span className="card-text">{cardName || name}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
          <div className="card-number">
            <span className="card-text">{cardNumbers}</span>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text">{cardOwner}</span>
            <span className="card-text">{cardExpiredDate}</span>
          </div>
        </div>
      </div>
    </CardBox>
  )
}

const mockData = {
  하얀카드: {
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '김하얀',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '하얀카드',
      color: '#000000',
      bg: '#F5F5F5',
    },
  },
  파란카드: {
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '이파랑',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '파란카드',
      color: '#ffffff',
      bg: '#162bb1',
    },
  },
  빨간카드: {
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '최빨강',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '빨간카드',
      color: '#ffffff',
      bg: '#932929',
    },
  },
  초록카드: {
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '강초록',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '초록카드',
      color: '#000000',
      bg: '#54cb25',
    },
  },
  에메랄드카드: {
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '박에메랄드',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '에메랄드카드',
      color: '#ffffff',
      bg: '#20d0ad',
    },
  },
  분홍카드: {
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '정분홍',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '분홍카드',
      color: '#ffffff',
      bg: '#d320c7',
    },
  },
  보라카드: {
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '진보라',
    cardExpiredDate: '07 / 2023',
    cardType: {
      name: '보라카드',
      color: '#ffffff',
      bg: '#7c1ddb',
    },
  },
  주황카드: {
    cardNumbers: '4321 - 8765 - **** - ****',
    cardOwner: '장주황',
    cardExpiredDate: '07 / 2023',
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
