import { Title } from './Title';

export default {
    title: 'Example/Title',
    component: Title,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Title {...args} />;

export const Basic = Template.bind({});

Basic.args = {
    title: '제목',
    bottom: 10,
};
