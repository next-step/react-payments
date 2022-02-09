import { Story } from "@storybook/react";
import Header, { Props } from "./Header";

export default {
  title: "componets/Header",
  component: Header,
  argTypes: {},
};

const Template: Story<Props> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
};
