import type { Meta, StoryObj } from '@storybook/react';
import {
  AppDisplay,
  TextField,
  letterSpacingValue,
  storybookControls,
  styleToken,
  TEXT_FIELD_VARIANTS,
} from '@/shared';

const FONT_SIZE = 18;
const LETTER_SPACING = letterSpacingValue(FONT_SIZE, -8.5);

const meta: Meta = {
  title: 'Primitive/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...storybookControls.argTypes,
    type: {
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    variant: {
      options: TEXT_FIELD_VARIANTS,
    },
  },
  args: {
    as: 'input',
    type: 'text',
    variant: 'outline',
    width: styleToken.width.w100,
    height: '45px',
    padding: '13px 12px 13px 11px',
    borderRadius: '6px',
    fontSize: `${FONT_SIZE}px`,
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    _placeholder: {
      letterSpacing: LETTER_SPACING,
    },
    autoFocus: true,
  },
  decorators: [
    (Story) => (
      <AppDisplay>
        <Story />
      </AppDisplay>
    ),
  ],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Password: Story = {
  args: {
    type: 'password',
  },
};

export const WithFocusOutlineStyle: Story = {
  args: {
    _focus: {
      outline: `2px solid ${styleToken.color.teal200}`,
    },
  },
};

export const WithFocusPlaceholderStyle: Story = {
  args: {
    placeholder: '중앙 정렬',
    _placeholder: {
      color: styleToken.color.teal200,
      textAlign: 'center',
      letterSpacing: '2px',
    },
  },
};

export const WithVariantFilled: Story = {
  args: {
    variant: 'filled',
  },
};

export const WithVariantFlushed: Story = {
  args: {
    variant: 'flushed',
  },
};

export const WithVariantUnstyled: Story = {
  args: {
    variant: 'unstyled',
  },
};
