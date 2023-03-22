import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import MyCardList from 'pages/MyCardList/MyCardListPage';
export default {
  title: 'Page',
  component: MyCardList,
  decorators: [withRouter],
} as ComponentMeta<typeof MyCardList>;

const Template: ComponentStory<typeof MyCardList> = (args) => <MyCardList />;

export const MyCardListPage = Template.bind({});
