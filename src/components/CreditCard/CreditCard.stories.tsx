import type { Meta, ComponentStory } from '@storybook/react';
import styled from '@emotion/styled';

import CreditCard from './CreditCard';

export default {
  title: 'Custom/CreditCard',
  component: CreditCard,
} as Meta;

export const Primary: ComponentStory<typeof CreditCard> = (args) => (
  <Wrapper>
    <CreditCard {...args} />
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 20px 0;
  width: 370px;
`;

Primary.args = {
  color: 'brand02',
  name: '아름 카드',
  number: '1234-5678-6789-0123',
  holderName: '양아름',
  expiration: '12/24',
};
