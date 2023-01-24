import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputBox from "./InputBox";
import Input from "./Input";

export default {
  title: "페이먼츠 미션/Components/InputBox",
  component: InputBox,
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = (props) => (
  <>
    <InputBox {...props}>
      <Input type="basic" placeholder="카드번호 1" /> -
      <Input type="basic" placeholder="카드번호 2" /> -
      <Input type="basic" nativeType="password" placeholder="카드번호 3" /> -
      <Input type="basic" nativeType="password" placeholder="카드번호 4" />
    </InputBox>

    <InputBox {...props}>
      <Input type="basic" placeholder="YY" /> /
      <Input type="basic" placeholder="MM" />
    </InputBox>
  </>
);

export const Primary = Template.bind({});
Primary.args = {};
