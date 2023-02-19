import type { ComponentStory, Meta } from '@storybook/react';

import CardSelectBox from './CardSelectBox';

export default {
  title: 'CardSelectBox',
  component: CardSelectBox,
} as Meta;

const Template: ComponentStory<typeof CardSelectBox> = (args) => <CardSelectBox {...args} />;

export const 은규 = Template.bind({});
은규.args = {
  name: '은규',
  color: '#FBCD58',
};
