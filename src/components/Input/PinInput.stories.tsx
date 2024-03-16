import { Meta, StoryObj } from '@storybook/react';
import { AppLayout, PinInput } from '@/components';

const meta: Meta<typeof PinInput> = {
  title: 'Components/PinInput',
  component: PinInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <AppLayout>
        <Story />
      </AppLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PinInput>;

export const Primary: Story = {
  render: () => (
    <PinInput.Root id="input-story" mask defaultValue={['', '', '', '']}>
      <PinInput.Label>Pin Input Label</PinInput.Label>
      <PinInput.Control>
        <PinInput.Input index={0} fontSize="20px" />
        <PinInput.Input index={1} fontSize="20px" />
        <PinInput.Input index={2} fontSize="20px" />
        <PinInput.Input index={3} fontSize="20px" />
      </PinInput.Control>
    </PinInput.Root>
  ),
};

export const WithReadOnly: Story = {
  render: () => (
    <PinInput.Root id="input-story" mask defaultValue={['', '', '0', '0']}>
      <PinInput.Label>Pin Input Label</PinInput.Label>
      <PinInput.Control>
        <PinInput.Input index={0} fontSize="20px" />
        <PinInput.Input index={1} fontSize="20px" />
        <PinInput.Input index={2} fontSize="20px" readOnly />
        <PinInput.Input index={3} fontSize="20px" readOnly />
      </PinInput.Control>
    </PinInput.Root>
  ),
};

export const WithShuffleIndex: Story = {
  render: () => (
    <PinInput.Root id="input-story" mask defaultValue={['', '', '', '']}>
      <PinInput.Label>Pin Input Label</PinInput.Label>
      <PinInput.Control>
        <PinInput.Input index={0} fontSize="20px" />
        <PinInput.Input index={2} fontSize="20px" />
        <PinInput.Input index={1} fontSize="20px" />
        <PinInput.Input index={3} fontSize="20px" />
      </PinInput.Control>
    </PinInput.Root>
  ),
};

export const WithCompltedValue: Story = {
  render: () => (
    <PinInput.Root
      id="input-story"
      mask
      defaultValue={['', '', '', '']}
      onValueComplete={() => {
        alert('complete');
      }}
    >
      <PinInput.Label>Pin Input Label</PinInput.Label>
      <PinInput.Control>
        <PinInput.Input index={0} fontSize="20px" />
        <PinInput.Input index={1} fontSize="20px" />
        <PinInput.Input index={2} fontSize="20px" />
        <PinInput.Input index={3} fontSize="20px" />
      </PinInput.Control>
    </PinInput.Root>
  ),
};
