import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DigitalCard } from './DigitalCard'
import { CARD } from 'controlled/styles/colors'

export default {
  title: 'Components/Card/DigitalCard',
  component: DigitalCard,
  argTypes: {
    type: {
      options: Object.keys(CARD),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof DigitalCard>

const Template: ComponentStory<typeof DigitalCard> = (args) => <DigitalCard {...args} />

export const Default = Template.bind({})
export const Lloyd = Template.bind({})

Default.args = {
  type: '',
  serialNums: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  ownerName: '',
  expiredDate: {
    mm: '',
    yy: '',
  },
}

Lloyd.args = {
  big: true,
  type: '로이드',
  serialNums: {
    first: '1111',
    second: '2222',
    third: '1111',
    fourth: '1111',
  },
  ownerName: '김형남',
  expiredDate: {
    mm: '08',
    yy: '25',
  },
}
