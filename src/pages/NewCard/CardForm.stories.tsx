import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardForm from '@/pages/NewCard/cardForm';

export default {
  title: 'components/CardForm',
  component: CardForm,
} as ComponentMeta<typeof CardForm>;

const Template: ComponentStory<typeof CardForm> = () => {
  return <CardForm />;
};

export const newAddCardForm = Template.bind({});
