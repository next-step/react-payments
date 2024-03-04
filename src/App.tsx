import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardInventoryPage } from './pages/card-inventory';
import { AddCompletedPage } from './pages/add-completed';
import { AddCardPage } from './pages/add-card';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardInventoryPage />} />
        <Route path="/card-inventory" element={<CardInventoryPage />} />
        <Route path="/add-card" element={<AddCardPage />} />
        <Route path="/add-completed" element={<AddCompletedPage />} />
      </Routes>
    </BrowserRouter>
  );
};
