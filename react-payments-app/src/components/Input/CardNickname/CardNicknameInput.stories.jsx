import CardNicknameInput from './CardNicknameInput';

import '../input.css';
import '../../../styles/index.css';

export default {
  title: 'Components/Input/CardNicknameInput',
  component: CardNicknameInput,
};

const Template = (args) => <CardNicknameInput {...args} />;

export const Default = Template.bind({});
