import React from 'react';
import { Route, Router, Routes } from './components';
import { CardDetail, CardEdit, CardList } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/card-detail" element={<CardDetail />} />
        <Route path="/card-edit" element={<CardEdit />} />
        <Route path="/card-add" element={<CardEdit />} />
        <Route path="/" element={<CardList />} />
      </Routes>
    </Router>
  );
}

export default App;
