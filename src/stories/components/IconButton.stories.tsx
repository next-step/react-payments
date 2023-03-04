import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "components/common/IconButton/IconButton";
import IconButtonPropsType from "components/common/IconButton/IconButton";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "IconButton",
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof IconButtonPropsType>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButtonPropsType> = (args) => <IconButtonPropsType {...args} />;

export const LeftButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LeftButton.args = {
  name: "arrowLeft",
  size: "2x",
  color: "black",
};
export const RemoveButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RemoveButton.args = {
  name: "remove",
  size: "2x",
  color: "black",
};
export const modifyButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
modifyButton.args = {
  name: "modify",
  size: "2x",
  color: "black",
};
