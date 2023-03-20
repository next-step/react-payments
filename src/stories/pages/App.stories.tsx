import { ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FormPage from 'pages/Form/FormPage';
import AliasPage from 'pages/Alias/AliasPage';
import MyCardListPage from 'pages/MyCardList/MyCardListPage';

import { withReactContext } from 'storybook-react-context';

import App from 'pages/App';
import { PaymentsContextProvider } from 'context/Payments';
export default {
  title: 'Page',
  component: App,
  decorators: [withRouter, withReactContext],
} as ComponentMeta<typeof App>;

const CompositionTemplate = ({ outlet }) => (
  <PaymentsContextProvider>
    <Routes>
      <Route element={<MyCardListPage />} path="/"></Route>
      <Route element={<FormPage />} path="/add"></Route>
      <Route element={<AliasPage />} path="/alias"></Route>
    </Routes>
  </PaymentsContextProvider>
);

export const AppPage = CompositionTemplate.bind({});
