import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DotListComponent from "components/Form/CompanyList/CompanyList";
import DotListProps from "components/Form/CompanyList/CompanyList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "DotList",
  component: DotListComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof DotListProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DotListProps> = (args) => <DotListProps {...args} />;

export const DotList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DotList.args = {};
