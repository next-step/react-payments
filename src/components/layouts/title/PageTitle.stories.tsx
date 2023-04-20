import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton } from '@/components/button'

import PageTitle from './PageTitle'

export default {
  title: 'Components/Layout/Title',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>

const Template: ComponentStory<typeof PageTitle> = (props) => (
  <div className="root">
    <div className="app">
      <PageTitle {...props} />
    </div>
  </div>
)

export const 카드추가 = Template.bind({})
카드추가.args = {
  title: '카드 추가',
  buttonElement: <BackButton />,
}

export const 보유카드 = Template.bind({})
보유카드.args = {
  title: '보유 카드',
  buttonElement: <BackButton />,
}

export const 카드등록완료 = Template.bind({})
카드등록완료.args = {
  title: '카드등록이 완료되었습니다.',
  buttonElement: <BackButton />,
}
