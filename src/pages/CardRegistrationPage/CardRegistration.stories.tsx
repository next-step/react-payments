import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardRegistrationPage from '.';
import CardListPage from '.';

export default {
  title: 'pages/cardRegistration',
  component: CardRegistrationPage,
} as ComponentMeta<typeof CardRegistrationPage>;

const Template: ComponentStory<typeof CardRegistrationPage> = () => <CardRegistrationPage />;

export const Default = Template.bind({});
