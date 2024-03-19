import type { Meta, StoryObj } from '@storybook/react';
import CardBox from '../components/cardBox';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Cardbox',
  component: CardBox,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    name: { control: 'text' }
  },
} satisfies Meta<typeof CardBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 이름이양하인경우: Story = {
  args: {
    name: "양하",
  },
};

export const 이름이정혁인경우: Story = {
  args: {
    name: "정혁"
  },
};

export const 카드넘버가있는경우: Story = {
  args: {
    name: "정혁",
    cardNumber: "1111"
  },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: 'Delete now',
//     backgroundColor: 'red',
//   }
// };