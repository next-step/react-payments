import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import CompletedPage from "pages/AliasPage/AliasPage";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Page",
  component: CompletedPage,
  decorators: [withRouter],
} as ComponentMeta<typeof CompletedPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof AddCardForm> = (args) => <AddCardForm />;

const Template: ComponentStory<typeof CompletedPage> = (args) => <CompletedPage />;

export const DefaultCompletedPage = Template.bind({});
