import { ComponentMeta } from '@storybook/react';
import Button from '../Button';

export default {
  title: 'Common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button>버튼</Button>;

export const DisabledButton = () => <Button disabled>버튼</Button>;
