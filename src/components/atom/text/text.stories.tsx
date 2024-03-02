import { Text, type TextProps } from '@/components/atom/text'
import type { StoryObj, Meta } from '@storybook/react'
import { textVariants } from '@/styles/variants.css'
import { layoutArgTypes } from '@/stories/arg-types'
import { Box } from '@/components'

const meta: Meta<typeof Text> = {
  title: 'atoms/Text',
  component: Text,
  argTypes: { ...layoutArgTypes },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  render: args => <Text {...args} />,
  args: {
    as: 'h1',
    children: 'Text',
    variant: 'heading1',
  },
}

const TextListTemplate = ({ props }: { props: TextProps[] }) => {
  return (
    <Box display="flex" flexDirection="column" gap="8px">
      {props.map((prop, idx) => (
        <Text key={idx} {...prop} />
      ))}
    </Box>
  )
}

type TextListStory = StoryObj<typeof TextListTemplate>

export const FontVariant: TextListStory = {
  render: TextListTemplate,
  args: {
    props: (Object.keys(textVariants) as (keyof typeof textVariants)[]).map(variant => ({
      variant,
      children: variant,
    })),
  },
}
