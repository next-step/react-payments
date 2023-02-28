import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from "components/Form/Form";

import { withRouter } from "storybook-addon-react-router-v6";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MyCardPage from "pages/MyCardListPage/MyCardListPage";
import CompletedPage from "pages/CompletedPage/CompletedPage";
import AddCardPage from "pages/FormPage/FormPage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Page",
  component: Form,
  decorators: [withRouter],
} as ComponentMeta<typeof Form>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof AddCardForm> = (args) => <AddCardForm />;

const CompositionTemplate = ({ outlet, ...args }) => (
  <Routes>
    <Route element={<AddCardPage />} path="/add"></Route>
    <Route element={<MyCardPage />} path="/"></Route>
    <Route element={<CompletedPage />} path="/complete"></Route>
  </Routes>
);

export const App = CompositionTemplate.bind({});
