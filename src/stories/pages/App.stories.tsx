import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MyCardPage from "pages/MyCardListPage/MyCardListPage";
import CompletedPage from "pages/CompletedPage/CompletedPage";
import FormPage from "pages/FormPage/FormPage";
import { withReactContext } from "storybook-react-context";
import { CardContextProvider } from "context/Card/CardContext";
import App from "pages/App";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Page",
  component: App,
  decorators: [withRouter, withReactContext],
} as ComponentMeta<typeof App>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof AddCardForm> = (args) => <AddCardForm />;

const CompositionTemplate = ({ outlet, ...args }) => (
  <CardContextProvider>
    <Routes>
      <Route element={<FormPage />} path="/add"></Route>
      <Route element={<MyCardPage />} path="/"></Route>
      <Route element={<CompletedPage />} path="/complete"></Route>
    </Routes>
  </CardContextProvider>
);

export const AppPage = CompositionTemplate.bind({});
