import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardRegistrationPage from '.';
import CompletePage from './Complete';

export default {
  title: 'pages/cardRegistrationComplete',
  component: CompletePage,
} as ComponentMeta<typeof CompletePage>;

const Template: ComponentStory<typeof CompletePage> = () => <CompletePage />;

export const Default = Template.bind({});
