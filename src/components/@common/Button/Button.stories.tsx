import type { Meta, ComponentStory } from '@storybook/react';
import styled from '@emotion/styled';

import Button from './Button';
import type { ButtonProps } from './Button.types';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'children',
      type: 'string',
    },
  },
} as Meta;

export const Primary: ComponentStory<typeof Button> = ({
  children,
  ...attributes
}: ButtonProps) => <Button {...attributes}>{children}</Button>;

Primary.args = {
  color: 'brand02',
  children: '카드 생성 완료하기',
};
