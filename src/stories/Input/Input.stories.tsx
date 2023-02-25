import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";

import Input from "components/common/Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState<string>(args.value as string);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  return <Input {...args} value={value} onChange={onChange} />;
};

export const Empty = Template.bind({});
Empty.args = {
  type: "text",
  value: "",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  value: "1234",
};
