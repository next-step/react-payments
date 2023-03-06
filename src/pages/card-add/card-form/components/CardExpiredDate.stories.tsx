import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardAdd } from '@/pages/card-add/hooks'
import { useCardInfo } from '@/pages/hooks'

import CardExpiredDate from './CardExpiredDate'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardExpiredDate',
  component: CardExpiredDate,
} as ComponentMeta<typeof CardExpiredDate>

const Template: ComponentStory<typeof CardExpiredDate> = (props) => {
  const { handleExpiredDate } = useCardInfo()
  const { expiredDateRef } = useCardAdd()
  return (
    <div className="root">
      <div className="app">
        <CardExpiredDate {...props} expiredDateRef={expiredDateRef} handleChange={handleExpiredDate} />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
