import { Meta, StoryObj } from "@storybook/react";
import LabelBox from "./LabelBox";
import { within } from "@testing-library/react";

const meta: Meta<typeof LabelBox> = {
  component: LabelBox,
  title: "LabelBox",
};

export default meta;

type Story = StoryObj<typeof LabelBox>;

export const Primary: Story = {
  args: {
    description: "디스크립션 안내 문구 입니다.",
    children: "fshdf",
  },
};

Primary.play = ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  step("초기 출력 확인", async () => {
    // const description = await canvas.findAllByLabelText("hello");
  });
};
