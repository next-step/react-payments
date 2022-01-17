import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardListPage from '.';

export default {
  title: 'pages/cardList',
  component: CardListPage,
} as ComponentMeta<typeof CardListPage>;

const Template: ComponentStory<typeof CardListPage> = () => <CardListPage />;

export const Default = Template.bind({});
