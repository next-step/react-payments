import CardExpirationDateInput from './input';

import '../input.css';
import '../../../styles/index.css';

export default {
  title: 'Components/Input/CardExpirationDateInput',
  component: CardExpirationDateInput,
};

const Template = (args) => <CardExpirationDateInput {...args} />;

export const Default = Template.bind({});
