import React from 'react';
import { BasicCard } from './Card';

export default {
    title: 'Example/Card',
    component: BasicCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <BasicCard {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
