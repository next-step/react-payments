import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";
import { waitFor, within } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
};

export default meta;

type Story = StoryObj<InputProps>;

export const Primary: Story = {
  args: {
    inputMode: "text",
    title: "input",
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const input = await canvas.findByTitle<HTMLInputElement>("input");

  await userEvent.type(input, "hello");

  expect(input.value).toBe("hello");
};
