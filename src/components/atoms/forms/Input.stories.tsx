import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "페이먼츠 미션/Components/Form/Input",
  component: Input,
  argTypes: {
    nativeType: {
      defaultValue: "text",
    },
    invalid: {
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (props) => (
  <div style={{ width: "50%" }}>
    <Input placeholder="입력해주세요" {...props} />
  </div>
);

export const basic = Template.bind({});
basic.args = {
  type: "basic",
};

export const underline = Template.bind({});
underline.args = {
  type: "underline",
};
