import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

export default {
  title: "페이먼츠 미션/Components/Form/ButtonBox",
  component: ButtonBox,
} as ComponentMeta<typeof ButtonBox>;

const Template: ComponentStory<typeof ButtonBox> = (props) => (
  <ButtonBox {...props}>
    <Button type="transparent">transparent</Button>
    <Button type="keypad">keypad</Button>
  </ButtonBox>
);

export const Primary = Template.bind({});
Primary.args = {};
