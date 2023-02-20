import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CardListPage from '../src/pages/CardListPage/CardListPage';
import CardNicknamePage from './pages/CardNicknamePage/CardNicknamePage';
import CardRegistration from './pages/CardRegistrationPage/CardRegistrationPage';

function App() {
  return (
    <div id='app' className='flex-column-center'>
      <div className='wrap'>
        <Routes>
          <Route path='/' element={<CardListPage />} />
          <Route path='/registration' element={<CardRegistration />} />
          <Route
            path='/registration/setCardNickname'
            element={<CardNicknamePage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
