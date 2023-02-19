import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputContainer from "../../components/Input/InputContainer";
import Input from "../../components/Input/Input";

export default {
  title: "Components/Input/InputContainer",
  component: InputContainer,
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = (args) => (
  <InputContainer {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: "라벨",
  rightLabel: "오른쪽 라벨",
  children: <Input />,
};
