import React from 'react';
import { CardDetail } from './pages/card-detail';
import { CardEdit } from './pages/card-edit';
import { CardList } from './pages/card-list';

function App() {
  return (
    <>
      <CardDetail />
      <CardList />
      <CardEdit />
    </>
  );
}

export default App;
