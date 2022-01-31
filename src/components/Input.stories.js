import { Input } from './Input';
import './utils.css';

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});

Basic.args = {
    type: 'text',
    size: 15,
};
