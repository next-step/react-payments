import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar, Box, Text } from '@/components/UI';

import Flex from '.';
export default {
    title: 'Components/UI/Flex',
    component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;
export const Default = Template.bind({});
Default.args = {};
