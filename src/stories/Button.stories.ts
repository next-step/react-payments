import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

import { expect } from "@storybook/jest";
import { waitFor, userEvent, within } from "@storybook/testing-library";

// ...

// Default 스토리에 인터랙션 스토리를 재생하는 속성을 추가한다.
Large.play = async ({ canvasElement }) => {
  // 직접 screen API를 쓸 수도 있지만 스토리북에서는 within(canvasElement) 로 캔버스를 가져올 것을 권장한다.
  const canvas = within(canvasElement);

  await waitFor(() => {
    expect(canvas.queryByText("You have no tasks")).toBe(null);
  });

  const getTask = () => canvas.getByRole("listitem", { name: "Export logo" });

  const pinButton = within(getTask()).getByRole("button", { name: "pin" });

  userEvent.click(pinButton);
};
