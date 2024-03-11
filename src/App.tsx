import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardManagement } from '@/features/card/pages/card-management';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardManagement />} />
      </Routes>
    </BrowserRouter>
  );
};
