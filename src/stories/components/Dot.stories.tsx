import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dot from "components/Dot";
import DotProps from "components/Dot";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dot",
  component: Dot,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DotProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DotProps> = (args) => <DotProps {...args} />;

export const DotRed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DotRed.args = {
  color: "red",
  value: "클린카드",
};
export const DotGreen = Template.bind({});
DotGreen.args = {
  color: "green",
  value: "네이버카드",
};
