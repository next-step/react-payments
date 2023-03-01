import type { Meta, ComponentStory } from '@storybook/react';
import styled from '@emotion/styled';

import Box from './Box';

export default {
  title: 'Common/Box',
  component: Box,
  argTypes: {
    justifyContent: {
      control: {
        type: 'radio',
        options: [
          'center',
          'flex-end',
          'flex-start',
          'space-around',
          'space-between',
          'space-evenly',
        ],
      },
    },
  },
} as Meta;

export const Primary: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <Box1 />
    <Box2 />
    <Box3 />
  </Box>
);

const Box1 = styled.div`
  width: 250px;
  height: 100px;
  background-color: red;
`;
const Box2 = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
`;
const Box3 = styled.div`
  width: 100px;
  height: 150px;
  background-color: blue;
`;
