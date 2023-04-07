import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useRef } from 'react'

import { useCardInfo } from '@/pages/hooks'

import CardPassword from './CardPassword'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardPassword',
  component: CardPassword,
} as ComponentMeta<typeof CardPassword>

const Template: ComponentStory<typeof CardPassword> = () => {
  const { handlePassword } = useCardInfo()
  const firstPasswordRef = useRef<HTMLInputElement>(null)
  const secondPasswordRef = useRef<HTMLInputElement>(null)
  const passwordRef = { first: firstPasswordRef, second: secondPasswordRef }
  return (
    <div className="root">
      <div className="app">
        <CardPassword passwordRef={passwordRef} handleChange={handlePassword} />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
