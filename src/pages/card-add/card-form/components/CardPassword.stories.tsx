import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useRef } from 'react'

import CardPassword from './CardPassword'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardPassword',
  component: CardPassword,
} as ComponentMeta<typeof CardPassword>

const Template: ComponentStory<typeof CardPassword> = () => {
  const firstPasswordRef = useRef<HTMLInputElement>(null)
  const secondPasswordRef = useRef<HTMLInputElement>(null)
  const passwordRef = { first: firstPasswordRef, second: secondPasswordRef }
  return (
    <div className="root">
      <div className="app">
        <CardPassword passwordRef={passwordRef} />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
