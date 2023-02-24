import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardInfo } from '@/pages/card-add/card-form/hooks'

import CardExpiredDate from './CardExpiredDate'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/Components',
  component: CardExpiredDate,
} as ComponentMeta<typeof CardExpiredDate>

const Template: ComponentStory<typeof CardExpiredDate> = (props) => {
  const { cardInfo, handleExpiredDate } = useCardInfo()
  return (
    <div className="root">
      <div className="app">
        <CardExpiredDate
          {...props}
          expiredMonth={cardInfo.expiredMonth}
          expiredYear={cardInfo.expiredYear}
          handleChange={handleExpiredDate}
        />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
