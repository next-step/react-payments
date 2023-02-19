import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputLabel from "../../components/Input/InputLabel";

export default {
  title: "Components/Input/InputLabel",
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args) => (
  <InputLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: "라벨",
  rightLabel: "오른쪽 라벨",
};
