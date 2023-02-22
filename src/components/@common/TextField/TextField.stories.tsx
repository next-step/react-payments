import type { Meta, ComponentStory } from '@storybook/react';

import TextField from './TextField';

export default {
  title: 'Common/TextField',
  component: TextField,
} as Meta;

export const Primary: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} className="w-30" />
);

Primary.args = {
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  maxLength: 30,
};
