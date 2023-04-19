import { ComponentMeta, ComponentStory } from '@storybook/react'

import NavigationButton from './NavigationButton'

export default {
  title: 'Components/Button/NavigationButton',
  component: NavigationButton,
  // Todo: 다음 버튼을 눌렀을 때도 상호작용 테스트를 할 수 있는건가?
  args: {
    additionalClassNames: 'mt-50',
    text: '다음',
    to: '/',
  },
} as ComponentMeta<typeof NavigationButton>

const Template: ComponentStory<typeof NavigationButton> = (props) => (
  <div className="root">
    <div className="app flex-column-center">
      <NavigationButton {...props} />
    </div>
  </div>
)

export const Default = Template.bind({})
