import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Input from "./Input";
import InputBox from "./InputBox";
import InputInvalidMessage from "./InputInvalidMessage";

export default {
  title: "페이먼츠 미션/Components/Form/InputInvalidMessage",
  component: InputInvalidMessage,
} as ComponentMeta<typeof InputInvalidMessage>;

const Template: ComponentStory<typeof InputInvalidMessage> = () => {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <InputBox>
        <Input
          placeholder="입력해주세요"
          defaultValue={value}
          onInput={(event) => setValue(event.currentTarget.value)}
        />
      </InputBox>
      {!value && <InputInvalidMessage>입력이 필요합니다.</InputInvalidMessage>}
    </>
  );
};

export const example = Template.bind({});
example.args = {};
