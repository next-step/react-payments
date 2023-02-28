import type { ComponentStory, Meta } from '@storybook/react'

import { CardDesign } from '../../components/Card'

export default {
  title: 'CardDesign',
  component: CardDesign,
} as Meta

const Template: ComponentStory<typeof CardDesign> = (args) => <CardDesign {...args} />

export const Default = Template.bind({})
