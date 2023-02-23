import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loading } from 'components/atoms/Loading'

export default {
  title: 'Loading',
  component: Loading,
  parameters: {
    componentSubtitle: '로딩 컴포넌트',
  },
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = () => <Loading />

export const Default = Template.bind({})
Default.args = {}
