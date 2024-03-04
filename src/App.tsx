import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardInventoryPage } from './pages/card-inventory';
import { AddCompletedPage } from './pages/add-completed';
import { AddCardPage } from './pages/add-card';
import { PATH } from './constants/routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.root} element={<CardInventoryPage />} />
        <Route path={PATH.cardInventory} element={<CardInventoryPage />} />
        <Route path={PATH.addCard} element={<AddCardPage />} />
        <Route path={PATH.addCompleted} element={<AddCompletedPage />} />
      </Routes>
    </BrowserRouter>
  );
};
