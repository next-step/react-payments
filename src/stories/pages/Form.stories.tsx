import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Form from 'pages/Form/FormPage';

export default {
  title: 'Page',
  component: Form,
  decorators: [withRouter],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form />;

export const FormPage = Template.bind({});
