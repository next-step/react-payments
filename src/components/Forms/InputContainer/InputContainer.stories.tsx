import { ComponentStory, Meta } from '@storybook/react';

import InputContainer from '@/components/Forms/InputContainer';
import { Basic } from '../Input/Input.stories';

export default {
  title: 'components/InputContainer',
  component: InputContainer,
} as Meta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = ({
  children,
  ...args
}) => {
  return <InputContainer {...args}>{children}</InputContainer>;
};

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  children: 'text node',
};

export const WithInput = Template.bind({});
WithInput.args = {
  title: 'Input title',
  titleAfterNode: [],
  children: <Basic {...Basic.args} />,
};

export const IsError = Template.bind({});
IsError.args = {
  title: 'Input title',
  titleAfterNode: [],
  isError: true,
  children: <Basic {...Basic.args} />,
};

export const WithTitleAfterNode = Template.bind({});
WithTitleAfterNode.args = {
  title: '카드 소유자 이름(선택)',
  titleAfterNode: ['0/30'],
  children: <Basic {...Basic.args} />,
};
