import NextButtonBox from './NextButtonBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'NextButtonBox',
  component: NextButtonBox,
} as Meta;

const Template: ComponentStory<typeof NextButtonBox> = (args) => <NextButtonBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
