import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "components/common/IconButton/IconButton";
import IconButtonPropsType from "components/common/IconButton/IconButton";
export default {
  title: "IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButtonPropsType>;

const Template: ComponentStory<typeof IconButtonPropsType> = (args) => <IconButtonPropsType {...args} />;

export const LeftButton = Template.bind({});
LeftButton.args = {
  name: "arrowLeft",
  size: "2x",
  color: "black",
};
export const RemoveButton = Template.bind({});
RemoveButton.args = {
  name: "remove",
  size: "2x",
  color: "black",
};
export const modifyButton = Template.bind({});
modifyButton.args = {
  name: "modify",
  size: "2x",
  color: "black",
};
