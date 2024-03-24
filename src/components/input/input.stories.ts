import type { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const meta = {
    title: 'Basic/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        primary: true,
        label: 'Input'
    }
}