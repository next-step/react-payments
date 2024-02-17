import { ComponentMeta, ComponentStory } from '@storybook/react'

import CardTypeButton, { CardTypeButtonProps } from './CardTypeButton'

export default {
  title: 'Components/Button/CardTypeButton',
  component: CardTypeButton,
} as ComponentMeta<typeof CardTypeButton>

const Template: ComponentStory<typeof CardTypeButton> = ({ name, color, backgroundColor }: CardTypeButtonProps) => (
  <div className="root">
    <div className="app">
      <CardTypeButton
        name={name}
        backgroundColor={backgroundColor}
        color={color}
        selectCardType={(name: string, backgroundColor: string, color: string) =>
          console.log(name, backgroundColor, color)
        }
      />
    </div>
  </div>
)

const CARD_TYPES = {
  하얀카드: {
    name: '하얀카드',
    color: '#000000',
    backgroundColor: '#F5F5F5',
  },
  파란카드: {
    name: '파란카드',
    color: '#ffffff',
    backgroundColor: '#162bb1',
  },
  빨간카드: {
    name: '빨간카드',
    color: '#ffffff',
    backgroundColor: '#932929',
  },
  초록카드: {
    name: '초록카드',
    color: '#000000',
    backgroundColor: '#54cb25',
  },
  에메랄드카드: {
    name: '에메랄드카드',
    color: '#ffffff',
    backgroundColor: '#20d0ad',
  },
  분홍카드: {
    name: '분홍카드',
    color: '#ffffff',
    backgroundColor: '#d320c7',
  },
  보라카드: {
    name: '보라카드',
    color: '#ffffff',
    backgroundColor: '#7c1ddb',
  },
  주황카드: {
    name: '주황카드',
    color: '#ffffff',
    backgroundColor: '#e1860f',
  },
}

export const 하얀카드 = Template.bind({})
하얀카드.args = CARD_TYPES['하얀카드']

export const 파란카드 = Template.bind({})
파란카드.args = CARD_TYPES['파란카드']

export const 빨간카드 = Template.bind({})
빨간카드.args = CARD_TYPES['빨간카드']

export const 초록카드 = Template.bind({})
초록카드.args = CARD_TYPES['초록카드']

export const 에메랄드카드 = Template.bind({})
에메랄드카드.args = CARD_TYPES['에메랄드카드']

export const 분홍카드 = Template.bind({})
분홍카드.args = CARD_TYPES['분홍카드']

export const 보라카드 = Template.bind({})
보라카드.args = CARD_TYPES['보라카드']

export const 주황카드 = Template.bind({})
주황카드.args = CARD_TYPES['주황카드']
