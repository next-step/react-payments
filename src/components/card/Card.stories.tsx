import { ComponentMeta, ComponentStory } from '@storybook/react'

import Card from './EmptyCard'

export default {
  title: '페이먼츠 미션/Components/Card/Card',
  component: Card,
  args: {
    cardNumbers: '1234 - 1234 - 1234 - 1234',
    cardOwner: '김희열',
    cardExpiredDate: '12 / 31',
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (props) => (
  <div className="root">
    <div className="app">
      <Card {...props} />
    </div>
  </div>
)

export const basic = Template.bind({})
//Todo: 카드 종류에 따라 템플릿 추가
