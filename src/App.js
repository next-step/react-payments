import React, { useState } from 'react';
import Add from './pages/Add';
import Complete from './pages/Complete';
import CardList from './pages/CardList';
import { AppContext, initialInputCard } from './AppContext';

export const companyList = [
  '신한카드',
  '현대카드',
  '삼성카드',
  'KB국민카드',
  '하나카드',
  'BC카드',
  'NH농협카드',
  '우리카드',
  '롯데카드',
  '씨티카드',
];

function App() {
  const [status, setRouteStatus] = useState('list');
  const [cardList, setCardList] = useState([]);
  const [inputCard, setInputCard] = useState(initialInputCard);

  return (
    <AppContext.Provider
      value={{
        status,
        setRouteStatus,
        cardList,
        setCardList,
        inputCard,
        setInputCard,
      }}
    >
      <div className="App">
        {status === 'list' ? (
          <CardList />
        ) : status === 'add' ? (
          <Add nextStatus="complete" inputCard={inputCard} />
        ) : status === 'complete' ? (
          <Complete nextStatus="list" />
        ) : (
          'Error: 관리자에게 문의해 주세요'
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
