import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputBox from "../../components/Input/InputBox";

export default {
  title: "Components/Input/InputBox",
  component: InputBox,
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = (args) => (
  <InputBox {...args} />
);

export const Medium = Template.bind({});
Medium.args = {
  medium: true,
  children: <div>test</div>,
};
