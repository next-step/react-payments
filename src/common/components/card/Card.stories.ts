import type { Meta, StoryObj } from "@storybook/react";

import Card from "common/components/card/Card";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  args: {
    mode: "preview",
    cardName: "카드이름",
    cardNumber: "1234-5678-1234-5678",
    cardOwner: "홍길동",
    expireDate: "12/34",
  },
  argTypes: {
    mode: {
      options: ["preview", "complete"],
      control: { type: "radio" },
    },
    expireDate: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
