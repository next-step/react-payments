import App from 'App';
import CardAddContainer from 'containers/CardAdd';
import CardAddCompletedContainer from 'containers/CardAddCompleted';
import CardListContainers from 'containers/CardList';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

interface PagesModel {
  path: string;
  element: React.ReactElement;
}

const RoutesInfo: React.VFC = () => {
  const pages: PagesModel[] = [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/add',
      element: <CardAddContainer />,
    },
    {
      path: '/add-completed',
      element: <CardAddCompletedContainer />,
    },
    { path: '/card-list', element: <CardListContainers /> },
  ];

  return (
    <Routes>
      {pages.map((page) => (
        <Route path={page.path} element={page.element} />
      ))}
    </Routes>
  );
};

export default RoutesInfo;
