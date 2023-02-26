import type { ComponentStory, Meta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { ROUTES } from '@/constants/routes';

import CardList from './CardList';

export default {
  title: 'CardList',
  component: CardList,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: ROUTES.CARD.ADD,
    },
  },
} as Meta;

const Template: ComponentStory<typeof CardList> = () => <CardList />;

export const Default = Template.bind({});
Default.args = {};
