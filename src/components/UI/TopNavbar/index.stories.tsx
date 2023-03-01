import { ComponentMeta, ComponentStory } from '@storybook/react';

import TopNavbar from '.';

export default {
    title: 'Components/UI/TopNavbar',
    component: TopNavbar,
} as ComponentMeta<typeof TopNavbar>;

const Template: ComponentStory<typeof TopNavbar> = (args) => (
    <TopNavbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: 'TopNavbar',
};
