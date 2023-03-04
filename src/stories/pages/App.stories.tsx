import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MyCardPage from "pages/MyCardListPage/MyCardListPage";
import CompletedPage from "pages/AliasPage/AliasPage";
import FormPage from "pages/FormPage/FormPage";
import { withReactContext } from "storybook-react-context";

import App from "pages/App";
import { PaymentsContextProvider } from "context/Payments";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Page",
  component: App,
  decorators: [withRouter, withReactContext],
} as ComponentMeta<typeof App>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof AddCardForm> = (args) => <AddCardForm />;

const CompositionTemplate = ({ outlet, ...args }) => (
  <PaymentsContextProvider>
    <Routes>
      <Route element={<FormPage />} path="/add"></Route>
      <Route element={<MyCardPage />} path="/"></Route>
      <Route element={<CompletedPage />} path="/complete"></Route>
    </Routes>
  </PaymentsContextProvider>
);

export const AppPage = CompositionTemplate.bind({});
