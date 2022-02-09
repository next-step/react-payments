import { Story } from "@storybook/react";
import Input, { Props } from "./Input";

export default {
  title: "componets/Input",
  component: Input,
  argTypes: {},
};

const Template: Story<Props> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
