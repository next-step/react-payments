import { Meta, StoryObj } from "@storybook/react";
import Card from "../Card";

const meta = {
  title: "UI-KIT/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

const TestEmptyCard = () => {
  return <Card variant="empty-card">This is Empty card!!</Card>;
};
export const EmptyCard: Story = {
  render: () => <TestEmptyCard />,
};

const TestSmallCard = () => {
  return <Card variant="small-card">This is Small card!!</Card>;
};
export const SmallCard: Story = {
  render: () => <TestSmallCard />,
};

const TestBigCard = () => {
  return <Card variant="big-card">This is Small card!!</Card>;
};
export const BigCard: Story = {
  render: () => <TestBigCard />,
};

export default meta;
