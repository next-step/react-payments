import { ComponentMeta, ComponentStory } from '@storybook/react';

import Modal from '.';

export default {
    title: 'Components/UI/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
export const Default = Template.bind({});
Default.args = {};
