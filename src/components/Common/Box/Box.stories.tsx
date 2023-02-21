import type { ComponentStory, Meta } from '@storybook/react';

import Box from './Box';

export default {
  title: 'Box',
  component: Box,
} as Meta;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </Box>
);

export const Default = Template.bind({});
Default.args = {};

export const flexBox = Template.bind({});
flexBox.args = {
  className: 'flex',
};

export const flexBetweenBox = Template.bind({});
flexBetweenBox.args = {
  className: 'flex-between',
};
