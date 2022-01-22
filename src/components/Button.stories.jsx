import React from 'react';

import { Button } from './Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
    title: '버튼',
    size: 15,
};
