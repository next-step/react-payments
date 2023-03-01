import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardListPage from '../pages/CardListPage/CardListPage';
import CardNicknamePage from '../pages/CardNicknamePage/CardNicknamePage';
import CardRegistrationPage from '../pages/CardRegistrationPage/CardRegistrationPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardListPage />} />
        <Route path='/registration' element={<CardRegistrationPage />} />
        <Route
          path='/registration/setCardNickname'
          element={<CardNicknamePage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
