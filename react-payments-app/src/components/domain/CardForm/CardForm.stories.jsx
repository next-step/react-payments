import { default as CardFormComponent } from './CardForm';

export default {
  title: 'Component/Domain/Form',
  component: CardFormComponent,
};

const Template = (args) => <CardFormComponent {...args} />;

export const CardForm = Template.bind({});
