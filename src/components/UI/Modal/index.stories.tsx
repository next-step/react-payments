import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar, Box, Flex, Modal, Text } from '@/components/UI';

export default {
  title: 'Components/UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
export const Default = Template.bind({});
Default.args = {};

export const WithCardOption = Template.bind({});
WithCardOption.args = {
  children: (
    <Box>
      <Flex justify="center">
        <Flex direction="column" justify="center" align="center">
          <Avatar />
          <Text css={{ fontSize: '$3' }}>클린 카드</Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Avatar />
          <Text css={{ fontSize: '$3' }}>클린 카드</Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Avatar />
          <Text css={{ fontSize: '$3' }}>클린 카드</Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Avatar />
          <Text css={{ fontSize: '$3' }}>클린 카드</Text>
        </Flex>
      </Flex>
      <Flex justify={'center'}>
        <Flex direction="column" justify="center" align="center">
          <Avatar />
          <Text css={{ fontSize: '$3' }}>클린 카드</Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Avatar />
          <Text css={{ fontSize: '$3' }}>클린 카드</Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Avatar />
          <Text css={{ fontSize: '$3' }}>클린 카드</Text>
        </Flex>
        <Flex direction="column" justify="center" align="center">
          <Avatar />
          <Text css={{ fontSize: '$3' }}>클린 카드</Text>
        </Flex>
      </Flex>
    </Box>
  ),
};
