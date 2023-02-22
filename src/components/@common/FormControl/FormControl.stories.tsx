import type { Meta } from '@storybook/react';
import type { PropsWithChildren } from 'react';

import FormControl from './FormControl';
import type { LabelProps } from './FormControl.types';

export default {
  title: 'Common/FormControl',
  component: FormControl,
  argTypes: {
    help: {
      type: 'string',
    },
    children: {
      type: 'string',
      table: {
        category: 'FormControl.Label',
      },
    },
  },
} as Meta;

export const Primary = ({ help, children }: PropsWithChildren<LabelProps>) => (
  <FormControl>
    <FormControl.Label help={help && <p>{help}</p>}>
      {children}
    </FormControl.Label>
  </FormControl>
);

Primary.args = {
  help: '신용카드 앞면의 16자를 입력해주세요.',
  children: '카드 번호',
};
