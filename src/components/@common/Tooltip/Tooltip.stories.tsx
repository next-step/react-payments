import type { Meta, ComponentStory } from '@storybook/react';
// import styled from '@emotion/styled';

import { Button } from '../Button';
import Tooltip from './Tooltip';
import type { TooltipProps } from './Tooltip.types';

export default {
  title: 'Common/Tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      type: 'string',
    },
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Primary = ({ content, children }: TooltipProps) => (
  <Tooltip content={<p>{content}</p>}>
    <Button color="gray05">{children}</Button>
  </Tooltip>
);

Primary.args = {
  children: 'Target',
  content: '툴팁 예제 입니다.',
};
