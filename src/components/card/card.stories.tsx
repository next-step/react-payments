import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Card from '.'

export default {
  title: 'components/Card',
  component: Card,
  parameters: {
    componentSubtitle: '카드 컴포넌트',
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  card: {
    id: '1',
    cardOwner: 'test',
    expireDate: '02/23',
    pinCode: '123',
    cardNumber: '1111-2222-3333-4444',
    password: '12',
  },
  isShowNickname: true,
  onClick: action('onClick'),
}

export const Empty = Template.bind({})
Empty.args = {
  isShowNickname: false,
  onClick: action('onClick'),
}