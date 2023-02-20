import { ComponentMeta } from '@storybook/react';
import Input from '../Input';

export default {
  title: 'Common/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const DefaultInput = () => <Input />;
