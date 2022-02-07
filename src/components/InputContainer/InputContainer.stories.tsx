import { Story } from "@storybook/react";
import Input from "components/Input/Input";
import { PropsWithChildren } from "react";
import InputContainer, { Props } from "./InputContainer";

export default {
  title: "componets/InputContainer",
  component: InputContainer,
  argTypes: {},
};

const Template: Story<PropsWithChildren<Props>> = (args) => <InputContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  children: <Input />,
};
