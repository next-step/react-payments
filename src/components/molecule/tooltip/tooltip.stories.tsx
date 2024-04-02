import { Meta, StoryObj } from '@storybook/react'
import { Text } from '@/components/atom/text'
import { Tooltip } from './tooltip'
import { ComponentProps } from 'react'
import { OverlayContextProvider } from '@/contexts'
import { layoutArgTypes } from '@/stories/arg-types'

const meta = {
  title: 'molecule/tooltip',
  component: Tooltip,
  argTypes: {
    ...layoutArgTypes,
  },
  decorators: [
    Story => (
      <OverlayContextProvider>
        <Story />
      </OverlayContextProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta

const Template = (args: ComponentProps<typeof Tooltip>) => {
  return (
    <Tooltip {...args}>
      <Text as="span">Tooltip Trigger</Text>
    </Tooltip>
  )
}

export const Default: StoryObj<typeof Tooltip> = {
  render: Template,
  args: {
    label: 'tooltip 입니다',
  },
}
