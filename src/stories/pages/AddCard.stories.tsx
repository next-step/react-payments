import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AddCardForm from "components/AddCardForm";

import { withRouter } from "storybook-addon-react-router-v6";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MyCardPage from "pages/MyCardPage";
import CompletedPage from "pages/CompletedPage";
import AddCardPage from "pages/AddCardPage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Page",
  component: AddCardForm,
  decorators: [withRouter],
} as ComponentMeta<typeof AddCardForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof AddCardForm> = (args) => <AddCardForm />;

const CompositionTemplate = ({ outlet, ...args }) => (
  <Routes>
    <Route element={<AddCardPage />} path="/add"></Route>
    <Route element={<MyCardPage />} path="/"></Route>
    <Route element={<CompletedPage />} path="/complete"></Route>
  </Routes>
);

export const main = CompositionTemplate.bind({});
