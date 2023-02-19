import React, { useContext, useEffect } from 'react';
import { Route } from './components/Route';
import { Router, useNavigate } from './components/Router';
import { Routes } from './components/Routes/Routes';
import { CardDetail } from './pages/card-detail';
import { CardEdit } from './pages/card-edit';
import { CardList } from './pages/card-list';

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
