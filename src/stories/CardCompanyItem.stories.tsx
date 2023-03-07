import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CardCompanyItem } from 'components/CardCompanyItem'
import { CARD_COMPNAYS_CODE } from 'constants/cardCompanyCode'
import React from 'react'

export default {
  title: 'components/CardCompanyItem',
  component: CardCompanyItem,
  parameters: {
    componentSubtitle: '카드 회사 컬러 버튼 컴포넌트',
  },
} as ComponentMeta<typeof CardCompanyItem>

const Template: ComponentStory<typeof CardCompanyItem> = (args) => (
  <CardCompanyItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  cardCode: CARD_COMPNAYS_CODE.KB,
  onClick: action('onClick'),
}
