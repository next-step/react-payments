import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../styles.css';
import CardList from '.';

export default {
  title: 'CardList',
  component: CardList,
  argTypes: { onClickEmptyCard: { action: 'clicked' } },
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = args => (
  <CardList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  cardInfoList: [
    {
      title: 'Title',
      bgColor: 'skyblue',
      creditNumber: '1234-1234-1234-1234',
      customerName: 'NAME',
      expirationDate: '02/23',
    },
  ],
  onClickEmptyCard: () => {},
};
