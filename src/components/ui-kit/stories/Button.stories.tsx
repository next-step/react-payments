import { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";
import { FaChevronLeft } from "react-icons/fa";

const meta = {
  title: "UI-KIT/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const TestButtonWithString = () => {
  const handleClick = () => {
    console.log("click Button!!");
  };
  return <Button onClick={handleClick}>This is Button!!</Button>;
};

export const WithString: Story = {
  render: () => <TestButtonWithString />,
};

const TestButtonWithReactNode = () => {
  const handleClick = () => {
    console.log("click Button!!");
  };
  return (
    <Button onClick={handleClick}>
      <FaChevronLeft size={20} />
    </Button>
  );
};

export const WithReactNode: Story = {
  render: () => <TestButtonWithReactNode />,
};

export default meta;
