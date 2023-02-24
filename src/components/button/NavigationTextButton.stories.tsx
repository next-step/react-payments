import { ComponentMeta, ComponentStory } from '@storybook/react'

import NavigationTextButton from './NavigationTextButton'

export default {
  title: '페이먼츠 미션/Components/Button/NavigationTextButton',
  component: NavigationTextButton,
  // Todo: 다음 버튼을 눌렀을 때도 상호작용 테스트를 할 수 있는건가?
  args: {
    additionalClassNames: 'mt-50',
    text: '다음',
    to: '/',
  },
} as ComponentMeta<typeof NavigationTextButton>

const Template: ComponentStory<typeof NavigationTextButton> = (props) => (
  <div className="root">
    <div className="app flex-column-center">
      <NavigationTextButton {...props} />
    </div>
  </div>
)

export const basic = Template.bind({})
