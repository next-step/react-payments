import React from 'react';

import { InputContainer } from './InputContainer';
import './utils.css';

export default {
    title: 'Example/InputContainer',
    component: InputContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <InputContainer {...args} />;

export const Basic = Template.bind({});
