import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import Alias from './pages/Alias';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/alias" element={<Alias />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
