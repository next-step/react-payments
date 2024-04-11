import { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';
import { OverlayProvider, useOverlay } from './OverlayProvider';
import { Button, AppDisplay, VStack, storybookControls, Box, styleToken } from '@/shared';

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...storybookControls.argTypes,
    placement: {
      options: ['bottom', 'center'],
    },
  },
  decorators: [
    (Story) => (
      <OverlayProvider>
        <AppDisplay>
          <Story />
        </AppDisplay>
      </OverlayProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  render: () => {
    const overlay = useOverlay();

    const handleOpen = () => {
      overlay.open(({ close, opened }) => (
        <Overlay opened={opened} close={close} closeOverlayClick placement="center">
          <Box backgroundColor={styleToken.color.white} padding="20px" width="300px">
            <h2>Overlay Content</h2>
            <p>This is the content of the overlay.</p>
            <Button onClick={close}>Close</Button>
          </Box>
        </Overlay>
      ));
    };

    return <Button onClick={handleOpen}>Open Overlay</Button>;
  },
};

export const WithPlacements: Story = {
  render: () => {
    const overlay = useOverlay();

    const openOverlay = (placement: 'bottom' | 'center') => {
      overlay.open(({ close, opened }) => (
        <Overlay opened={opened} close={close} closeOverlayClick placement={placement}>
          <Box backgroundColor={styleToken.color.white} padding="20px" width="300px">
            <h2>Overlay Content</h2>
            <p>This is the content of the overlay.</p>
            <Button onClick={close}>Close</Button>
          </Box>
        </Overlay>
      ));
    };

    return (
      <VStack spacing="16px">
        <Button onClick={() => openOverlay('bottom')}>Open Bottom Overlay</Button>
        <Button onClick={() => openOverlay('center')}>Open Center Overlay</Button>
      </VStack>
    );
  },
};
