import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardManagementPage } from '@/features/card/pages/card-management';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardManagementPage />} />
      </Routes>
    </BrowserRouter>
  );
};
