import Header from './Header';
import './header.css';

export default {
  title: 'Component/Common/Header',
  components: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

export const CardRegistration = Template.bind({});
CardRegistration.args = {
  pageTitle: '카드추가',
  headerIcon: '<',
};

export const CardList = Template.bind({});
CardList.args = {
  pageTitle: '보유카드',
  headerIcon: '<',
};
