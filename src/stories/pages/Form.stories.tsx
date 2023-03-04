import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MyCardPage from "pages/MyCardListPage/MyCardListPage";
import CompletedPage from "pages/AliasPage/AliasPage";
import FormPage from "pages/FormPage/FormPage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Page",
  component: FormPage,
  decorators: [withRouter],
} as ComponentMeta<typeof FormPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof AddCardForm> = (args) => <AddCardForm />;

const Template: ComponentStory<typeof FormPage> = (args) => <FormPage />;

export const DefaultFormPage = Template.bind({});
