import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AddCard, CardAdded, CardList } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCard />} />
        <Route path="/card-list" element={<CardList />} />
        <Route path="/card-added" element={<CardAdded />} />
        <Route path="*" element={<Navigate replace to="/card-list" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
