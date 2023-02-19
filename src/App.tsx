import React from 'react';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentCardList from './pages/PaymentCardList';
import PaymentCardRegister from './pages/PaymentCardRegister';
import PaymentCardComplete from './pages/PaymentCardComplete';
import Layout from './components/common/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path={'/'}
            element={<Layout className={'flex-column-center'} />}
          >
            <Route index element={<PaymentCardList />} />
            <Route path={'/complete'} element={<PaymentCardComplete />} />{' '}
          </Route>
          <Route path={'/'} element={<Layout />}>
            <Route path={'/register'} element={<PaymentCardRegister />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
