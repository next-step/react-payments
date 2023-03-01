import type { Meta } from '@storybook/react';
import { PropsWithChildren } from 'react';

import Help from './Help';

export default {
  title: 'Custom/Help',
  component: Help,
  argTypes: {
    children: {
      name: 'children',
      type: 'string',
    },
  },
} as Meta;

export const Primary = ({ children }: PropsWithChildren) => (
  <Help>
    <p>{children}</p>
  </Help>
);

Primary.args = {
  children: '신용카드 앞면의 16자를 입력해주세요.',
};
