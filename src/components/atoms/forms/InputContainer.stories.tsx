import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputContainer from "./InputContainer";
import InputBox from "./InputBox";
import Input from "./Input";

export default {
  title: "페이먼츠 미션/Components/Form/InputContainer",
  component: InputContainer,
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = (props) => (
  <>
    <InputContainer {...props}>
      <InputBox>
        <Input type="basic" placeholder="카드번호 1" /> -
        <Input type="basic" placeholder="카드번호 2" /> -
        <Input type="basic" nativeType="password" placeholder="카드번호 3" /> -
        <Input type="basic" nativeType="password" placeholder="카드번호 4" />
      </InputBox>
    </InputContainer>

    <InputContainer {...props}>
      <InputBox>
        <Input type="basic" placeholder="YY" /> /
        <Input type="basic" placeholder="MM" />
      </InputBox>
    </InputContainer>
  </>
);

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "타이틀이 있는 경우",
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {};
