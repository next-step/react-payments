import { ComponentMeta, ComponentStory } from '@storybook/react'

import BigCard from './BigCard'

export default {
  title: '페이먼츠 미션/Components/Card/BigCard',
  component: BigCard,
  args: {
    onClickDeleteButton: () => {
      return
    },
    cardName: '클린카드',
    cardNumbers: '1234 - 1234 - 1234 - 1234',
    cardOwner: '김희열',
    cardExpiredDate: '12 / 31',
  },
} as ComponentMeta<typeof BigCard>

const Template: ComponentStory<typeof BigCard> = (props) => (
  <div className="root">
    <div className="app">
      <BigCard {...props} />
    </div>
  </div>
)

export const basic = Template.bind({})
