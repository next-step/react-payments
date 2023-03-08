import React from 'react';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentCardList from './pages/PaymentCardList';
import PaymentCardRegister from './pages/PaymentCardRegister';
import Layout from './components/common/Layout';
import { CardProvider } from './context/CardContext';
import PaymentCardComplete from './pages/PaymentCardComplete';
import { CardListProvider } from './context/CardListContext';
import { ROUTE } from './constant/route';

function App() {
  return (
    <BrowserRouter>
      <CardProvider>
        <CardListProvider>
          <Routes>
            <Route path={ROUTE.HOME} element={<Layout />}>
              <Route index element={<PaymentCardList />} />
              <Route path={ROUTE.REGISTER} element={<PaymentCardRegister />} />
              <Route path={ROUTE.COMPLETE} element={<PaymentCardComplete />} />
            </Route>
          </Routes>
        </CardListProvider>
      </CardProvider>
    </BrowserRouter>
  );
}

export default App;
