import { Meta, StoryObj } from '@storybook/react';
import {
  Typography,
  TypographyVariants,
  typographyVariantStyle,
  AppDisplay,
  VStack,
  storybookControls,
  styleToken,
} from '@/shared';

const meta: Meta<typeof Typography> = {
  title: 'Primitive/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...storybookControls.argTypes,
    variant: {
      options: ['caption', 'title', 'body', 'subtitle', 'headline', 'display'],
    },
  },
  decorators: [
    (Story) => (
      <AppDisplay>
        <Story />
      </AppDisplay>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    variant: 'body',
    children: 'Hello Typography',
  },
};

export const WithVariants: Story = {
  render: () => (
    <VStack spacing="24px">
      {Object.entries(TypographyVariants).map(([key, value]) => {
        const { fontSize, fontWeight, lineHeight, letterSpacing } = typographyVariantStyle[value];

        return (
          <VStack>
            <Typography key={`${key}-name`} variant={value} color={styleToken.color.black}>
              {value}
            </Typography>
            <Typography key={`${key}-style`} variant="caption" color={styleToken.color.gray700}>
              {fontSize} {fontWeight} {lineHeight} {letterSpacing}
            </Typography>
          </VStack>
        );
      })}
    </VStack>
  ),
};
