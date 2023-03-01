import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import MyCardPage from "pages/MyCardListPage/MyCardListPage";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Page",
  component: MyCardPage,
  decorators: [withRouter],
} as ComponentMeta<typeof MyCardPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof AddCardForm> = (args) => <AddCardForm />;

const Template: ComponentStory<typeof MyCardPage> = (args) => <MyCardPage />;

export const DefaultMyCardListPage = Template.bind({});
