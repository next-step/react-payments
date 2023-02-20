import CardNickname from './input';

import '../input.css';
import '../../../styles/index.css';

export default {
  title: 'Components/Input/CardNickname',
  component: CardNickname,
};

const Template = (args) => <CardNickname {...args} />;

export const Default = Template.bind({});
