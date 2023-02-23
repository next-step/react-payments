import { ComponentMeta, ComponentStory } from '@storybook/react'

import Card from './Card'

export default {
  title: '페이먼츠 미션/Components/Card/Card',
  component: Card,
  args: {
    cardNumbers: { first: '1234', second: '5678', third: '9123', fourth: '4567' },
    name: '김희열',
    expiratedMonth: '02',
    expiratedYear: '20',
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
