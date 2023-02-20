import CardPasswordInput from './CardPasswordInput';

import '../input.css';
import '/src/styles/utils.css';

export default {
  title: 'Components/Input/CardPasswordInput',
  component: CardPasswordInput,
};

const Template = (args) => <CardPasswordInput {...args} />;

export const Default = Template.bind({});
