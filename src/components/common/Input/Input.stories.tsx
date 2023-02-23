import { useRef } from 'react';
import { Story } from '@storybook/react';
import { styled } from '@storybook/theming';

import { Input } from 'components/common';
import type { InputProps } from 'components/common/Input';

export default {
  title: 'Input',
  component: Input,
};

export const Template: Story<InputProps> = (args) => {
  const ref = useRef<HTMLInputElement>(null);

  return <Input {...args} ref={ref} />;
};
Template.args = {
  value: 'Sample',
  textAlign: 'left',
  size: 'medium',
  label: 'This is label',
  hasProgress: true,
  maxLength: 30,
};
Template.storyName = 'Playground';

const Wrapper = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Size = () => {
  return (
    <Wrapper>
      <Input value="small" size="small" textAlign="left" />
      <Input value="medium" size="medium" textAlign="left" />
      <Input value="large" size="large" textAlign="left" />
      <Input value="full" size="full" textAlign="left" />
    </Wrapper>
  );
};

export const Default = Template.bind({});
Default.args = { value: 'Sample', textAlign: 'left', size: 'medium' };

export const WithLabel = Template.bind({});
WithLabel.args = { value: 'Sample', textAlign: 'left', size: 'medium', label: 'This is label' };

export const WithProgress = Template.bind({});
WithProgress.args = {
  value: 'Sample',
  textAlign: 'left',
  size: 'medium',
  hasProgress: true,
  maxLength: 30,
};
