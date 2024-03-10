import { Text } from '@/components/atom/text'
import type { StoryObj, Meta } from '@storybook/react'
import { Flex } from './flex'
import { layoutArgTypes } from '@/stories/arg-types.ts'

const meta: Meta<typeof Flex> = {
  title: 'atom/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: { ...layoutArgTypes },
}

export default meta

type Story = StoryObj<typeof Flex>

const SAMPLE_ITEMS = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
export const Default: Story = {
  render: args => <Flex {...args} />,
  args: {
    gap: '8px',
    color: 'white',
    backgroundColor: 'aqua',
    children: (
      <>
        {SAMPLE_ITEMS.map(item => (
          <Text variant={'title1'} key={item}>
            {item}
          </Text>
        ))}
      </>
    ),
  },
}

export const FlexColumn: Story = {
  render: args => <Flex {...args} />,
  args: {
    gap: '8px',
    direction: 'column',
    color: 'white',
    backgroundColor: 'aqua',
    children: (
      <>
        {SAMPLE_ITEMS.map(item => (
          <Text variant={'title1'} key={item}>
            {item}
          </Text>
        ))}
      </>
    ),
  },
}
