import { Story } from "@storybook/react";
import BackButton, { Props } from "./BackButton";

export default {
  title: "componets/BackButton",
  component: BackButton,
  argTypes: {},
};

const Template: Story<Props> = (args) => <BackButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
};
