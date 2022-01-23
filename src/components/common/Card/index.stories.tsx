import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card from '.'

export default {
  title: '카드등록페이지/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Empty = Template.bind({})
Empty.args = {
  type: 'small',
  holderName: '',
  cardNumber: ['', '', '', ''],
  expireMonth: '',
  expireYear: '',
  company: { name: '', color: '' },
}

export const Small = Template.bind({})
Small.args = {
  type: 'small',
  holderName: 'SUN',
  cardNumber: ['1234', '5678', '1234', '5678'],
  expireMonth: '01',
  expireYear: '22',
  company: { name: '도비 카드', color: '#E76E9A' },
}

export const Big = Template.bind({})
Big.args = {
  type: 'big',
  holderName: 'SUN',
  cardNumber: ['1234', '5678', '1234', '5678'],
  expireMonth: '01',
  expireYear: '22',
  company: { name: '도비 카드', color: '#E76E9A' },
}
