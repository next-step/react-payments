import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Modal } from 'components/atoms/Modal'
import { CardCompanyList } from 'components/molecules/CardCompanyList'
import React from 'react'
import { MobileTemplate } from 'templates/MobileTemplate'

export default {
  title: 'components/Modal',
  component: Modal,
  parameters: {
    componentSubtitle: '모달 컴포넌트',
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
  <MobileTemplate>
    <Modal {...args} />
  </MobileTemplate>
)

export const CardCompanyListModal = Template.bind({})
CardCompanyListModal.args = {
  isOpen: true,
  children: <CardCompanyList onClick={action('onClick')} />,
}
