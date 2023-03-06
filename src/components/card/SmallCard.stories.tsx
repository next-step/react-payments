import { ComponentMeta, ComponentStory } from '@storybook/react'

import SmallCard from './SmallCard'

export default {
  title: '페이먼츠 미션/Components/Card/SmallCard',
  component: SmallCard,
  args: {
    cardName: '클린카드',
    cardNumbers: '1234 - 1234 - 1234 - 1234',
    cardOwner: '김희열',
    cardExpiredDate: '12 / 31',
  },
} as ComponentMeta<typeof SmallCard>

const Template: ComponentStory<typeof SmallCard> = (props) => (
  <div className="root">
    <div className="app">
      <SmallCard {...props} />
    </div>
  </div>
)

export const basic = Template.bind({})
