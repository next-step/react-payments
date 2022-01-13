import CardForm from '@components/cardForm'
import { ComponentStory } from '@storybook/react'
import '/public/styles/index.css'

export default {
  title: '2. Templates',
}

const CardFormTemplate: ComponentStory<typeof CardForm> = args => (
  <div className="page-container">
    <CardForm {...args} saveCard={() => {}} setCardData={() => {}} />
    <div id="modalRoot"></div>
  </div>
)

export const AddForm = CardFormTemplate.bind({})
