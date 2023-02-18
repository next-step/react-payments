import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../components/common/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: "Base",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  color: "#94dacd",
};
