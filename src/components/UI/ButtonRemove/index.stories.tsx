import { ComponentMeta } from '@storybook/react';

import ButtonRemove from '.';

export default {
  title: 'Components/UI/ButtonRemove',
  component: ButtonRemove,
} as ComponentMeta<typeof ButtonRemove>;

export const Default = () => {
  return <ButtonRemove />;
};
