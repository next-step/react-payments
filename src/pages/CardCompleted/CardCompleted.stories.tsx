import { withKnobs } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton } from '@/components/button'
import { CardDetailsForm } from '@/components/layouts'
import { PageDecorator } from '@/decorator'

import CardCompleted from './CardCompleted'
import { useCardCompleted } from './hooks'

interface CardCompletedProps {
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

/**
 * Todo: 다음 버튼 클릭에 대한 테스트
 */
export default {
  title: 'Pages/CardCompleted',
  component: CardCompleted,
  decorators: [PageDecorator, withKnobs],
} as ComponentMeta<typeof CardCompleted>

const Template: ComponentStory<typeof CardCompleted> = ({
  cardNumbers,
  cardName,
  cardOwner,
  cardExpiredDate,
  cardType,
}: CardCompletedProps) => {
  const { nicknameRef, handlePreNavigation } = useCardCompleted()

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
      <CardDetailsForm.CardAliasInput inputRef={nicknameRef} />
      <CardDetailsForm.NavigationButton
        additionalClassNames="mt-50"
        onBeforeNavigate={handlePreNavigation}
        to="/"
        text="다음"
      />
    </CardDetailsForm>
  )
}

const MOCK_DATA = {
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
하얀카드.args = MOCK_DATA['하얀카드']

export const 파란카드 = Template.bind({})
파란카드.args = MOCK_DATA['파란카드']

export const 빨간카드 = Template.bind({})
빨간카드.args = MOCK_DATA['빨간카드']

export const 초록카드 = Template.bind({})
초록카드.args = MOCK_DATA['초록카드']

export const 에메랄드카드 = Template.bind({})
에메랄드카드.args = MOCK_DATA['에메랄드카드']

export const 분홍카드 = Template.bind({})
분홍카드.args = MOCK_DATA['분홍카드']

export const 보라카드 = Template.bind({})
보라카드.args = MOCK_DATA['보라카드']

export const 주황카드 = Template.bind({})
주황카드.args = MOCK_DATA['주황카드']
