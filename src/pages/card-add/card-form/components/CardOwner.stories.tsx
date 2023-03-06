import { ComponentMeta, ComponentStory } from '@storybook/react'

import { useCardAdd } from '@/pages/card-add/hooks'
import { useCardInfo } from '@/pages/hooks'

import CardOwner from './CardOwner'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardOwner',
  component: CardOwner,
} as ComponentMeta<typeof CardOwner>

const Template: ComponentStory<typeof CardOwner> = (props) => {
  const { handleOwner } = useCardInfo()
  const { ownerRef } = useCardAdd()
  return (
    <div className="root">
      <div className="app">
        <CardOwner {...props} ownerRef={ownerRef} handleChange={handleOwner} />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
