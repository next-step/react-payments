import type { Meta } from '@storybook/react';
import type { PropsWithChildren } from 'react';

import FormFieldControl from './FormFieldControl';
import type { LabelProps } from './FormFieldControl.types';

export default {
  title: 'Common/FormFieldControl',
  component: FormFieldControl,
  argTypes: {
    help: {
      type: 'string',
    },
    children: {
      type: 'string',
      table: {
        category: 'FormFieldControl.Label',
      },
    },
  },
} as Meta;

export const Primary = ({ help, children }: PropsWithChildren<LabelProps>) => (
  <FormFieldControl>
    <FormFieldControl.Label help={help && <p>{help}</p>}>
      {children}
    </FormFieldControl.Label>
  </FormFieldControl>
);

Primary.args = {
  help: '신용카드 앞면의 16자를 입력해주세요.',
  children: '카드 번호',
};
