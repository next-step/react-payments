import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from 'components/atoms/Card'
import { UI_SIZE } from 'constants/ui.constant'
import { action } from '@storybook/addon-actions'
import { ADD_CARD_VIEW_VALUE, CARD_COMPNAYS_CODE } from 'constants/card'

export default {
  title: 'Card',
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
    cardCompanyCode: CARD_COMPNAYS_CODE.BC,
    cardNickname: 'Soo Card',
    cardOwner: 'Soo',
    expireDate: '05/23',
    pinCode: '355',
    cardNumber: '1111-2222-3333-4444',
    password: '00',
  },
  size: UI_SIZE.SMALL,
  isShowNickname: true,
  onClick: action('onClick'),
}

export const Empty = Template.bind({})
Empty.args = {
  card: ADD_CARD_VIEW_VALUE,
  size: UI_SIZE.SMALL,
  isShowNickname: false,
  onClick: action('onClick'),
}
