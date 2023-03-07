import { Story } from '@storybook/react';

import { Card } from 'components/domain';
import type { CardProps } from 'components/domain/Card';
import { CardCompany } from 'types/card';

export default {
  title: 'Domain/Card',
  component: Card,
  argTypes: {
    expiredDate: {
      control: 'object',
    },
  },
};

export const Template: Story<CardProps> = (args) => <Card {...args} />;
Template.args = {
  company: CardCompany.Hana,
  owner: '홍길동',
  numbers: { num1: '1234', num2: '5678', num3: '1234', num4: '5678' },
  expiredDate: { month: '07', year: '23' },
};
Template.storyName = 'Playground';
