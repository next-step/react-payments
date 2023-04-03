import { ComponentMeta, ComponentStory } from '@storybook/react';

import VirtualKeyboard from '@/components/UI/VirtualKeyboard';
export default {
    title: 'Components/UI/VirtualKeyboard',
    component: VirtualKeyboard,
} as ComponentMeta<typeof VirtualKeyboard>;

const Template: ComponentStory<typeof VirtualKeyboard> = (args) => (
    <VirtualKeyboard {...args} />
);
export const Default = Template.bind({});
Default.args = {
    onChange: (n) => {
        alert(`${n} is slected`);
    },
};
