import { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Box",
};

export default meta;

type Story = StoryObj<typeof Box>;

export const CenterBox: Story = {
  args: {
    width: "100px",
    height: "100px",
    backgroundColor: "#ECEBF1",
    children: "hello",
    contentPosition: "center",
  },
};

export const MiddleBox: Story = {
  args: {
    width: "100px",
    height: "100px",
    backgroundColor: "#ECEBF1",
    children: "hello",
    contentPosition: "middle",
  },
};

export const CenterMiddleBox: Story = {
  args: {
    width: "100px",
    height: "100px",
    backgroundColor: "#ECEBF1",
    children: "hello",
    contentPosition: "centerMiddle",
  },
};
