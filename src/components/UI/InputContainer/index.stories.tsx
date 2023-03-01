import { ComponentMeta, ComponentStory } from '@storybook/react';

import InputContainer from '.';

export default {
  title: 'Components/UI/InputContainer',
  component: InputContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = (args) => (
  <InputContainer {...args} />
);
export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: '이름',
};

export const WithInput = Template.bind({});
WithInput.args = {
  children: (
    <>
      <input type="tel" name="1" placeholder="1234" maxLength={4} />
      <input type="tel" name="2" placeholder="1234" />
      <input type="password" name="3" placeholder="****" maxLength={4} />
      <input type="password" name="4" placeholder="****" maxLength={4} />
    </>
  ),
};

export const WithLabelInput = Template.bind({});
WithLabelInput.args = {
  label: '카드번호',
  children: (
    <>
      <input type="tel" name="1" placeholder="1234" maxLength={4} />
      <input type="tel" name="2" placeholder="1234" />
      <input type="password" name="3" placeholder="****" maxLength={4} />
      <input type="password" name="4" placeholder="****" maxLength={4} />
    </>
  ),
};
