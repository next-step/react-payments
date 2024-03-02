import { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import LabelBox from "./LabelBox";
import { within } from "@testing-library/react";

const meta: Meta<typeof LabelBox> = {
  component: LabelBox,
  title: "LabelBox",
};

export default meta;

type Story = StoryObj<typeof LabelBox>;

const LabelBoxTextValue = {
  description: "디스크립션 안내 문구 입니다.",
  children: "test",
};

export const Primary: Story = {
  args: {
    ...LabelBoxTextValue,
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const descriptionElement = canvas.getByText(/디스크립션 안내 문구 입니다./i);
  expect(descriptionElement).toBeInTheDocument();

  const childrenElement = canvas.getByText(/test/i);
  expect(childrenElement).toBeInTheDocument();
};
