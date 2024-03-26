import { Meta, StoryObj } from '@storybook/react'
import { BottomSheet } from './bottom-sheet'
import { ComponentProps } from 'react'
import { useOverlay } from '@/hooks'
import { OverlayContextProvider } from '@/contexts'
import { Text } from '@/components'
import { within, userEvent } from '@storybook/testing-library'

const meta: Meta<typeof BottomSheet.Content> = {
  title: 'molecule/BottomSheet',
  component: BottomSheet.Content,
  tags: ['autodocs'],
  argTypes: {},
}

const TRIGGER_TEXT = 'bottom-sheet 버튼'
const CLOSE_TEXT = 'close 버튼'

export default meta

type Story = StoryObj<typeof meta>

const Template = (args: ComponentProps<typeof BottomSheet.Content>) => {
  const [openBottomSheet, closeBottomSheet] = useOverlay()

  const handleClickButton = () => {
    openBottomSheet(
      <BottomSheet.Root>
        <BottomSheet.Dimmer />
        <BottomSheet.Content {...args} onClose={closeBottomSheet}>
          <Text color="aqua" onClick={closeBottomSheet}>
            {CLOSE_TEXT}
          </Text>
        </BottomSheet.Content>
      </BottomSheet.Root>,
    )
  }

  return (
    <OverlayContextProvider>
      <Text as="button" color="aqua" onClick={handleClickButton}>
        {TRIGGER_TEXT}
      </Text>
    </OverlayContextProvider>
  )
}

export const Default: Story = {
  render: args => (
    <OverlayContextProvider>
      <Template {...args} />
    </OverlayContextProvider>
  ),
  args: {
    height: '300px',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },
  play: async ({ step, canvasElement }) => {
    const canvas = within(canvasElement)

    const trigger = canvas.getByText(TRIGGER_TEXT)

    await step('open bottomsheet', async () => {
      await userEvent.click(trigger)
    })

    const closeButton = canvas.getByText(CLOSE_TEXT)

    await step('close bottomsheet', async () => {
      await userEvent.click(closeButton)
    })

    await step('open bottomsheet again', async () => {
      await userEvent.click(trigger)
    })

    await step('close bottom sheet by click outside of content', async () => {
      await userEvent.click(document.querySelector('body')!)
    })
  },
}
