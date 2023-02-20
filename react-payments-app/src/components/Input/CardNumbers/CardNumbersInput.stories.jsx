import CardNumbersInput from './CardNumbersInput';

import '../input.css';

export default {
  title: 'Components/Input/CardNumbersInput',
  component: CardNumbersInput,
};

const Template = (args) => <CardNumbersInput {...args} />;

export const Default = Template.bind({});
