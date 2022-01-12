import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from 'App';
import CardAddContainer from 'pages/CardAdd';
import CardAddCompletedContainer from 'pages/CardAddCompleted';
import CardListContainers from 'pages/CardList';

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
        <Route key={page.path} path={page.path} element={page.element} />
      ))}
    </Routes>
  );
};

export default RoutesInfo;
