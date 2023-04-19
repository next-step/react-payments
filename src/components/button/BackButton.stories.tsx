import { ComponentMeta, ComponentStory } from '@storybook/react'

import BackButton from './BackButton'

export default {
  title: 'Components/Button/BackButton',
  component: BackButton,
  args: {},
} as ComponentMeta<typeof BackButton>

const Template: ComponentStory<typeof BackButton> = () => (
  <div className="root">
    <div className="app">
      <h2 className="page-title">
        <BackButton />
      </h2>
    </div>
  </div>
)

export const Default = Template.bind({})
