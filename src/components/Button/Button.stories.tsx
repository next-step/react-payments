import { expect } from '@storybook/jest'
import { waitFor, userEvent, within } from '@storybook/testing-library'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Text = Template.bind({})
Text.args = {
  type: 'button',
  children: <span>확인</span>,
}

export const Demo = {
  args: {
    type: 'submit',
    children: <span>확인</span>,
  },
  play: async ({ args, canvasElement }: any) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
  },
}
