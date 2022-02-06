import React, { useState } from 'react';
import Add from './pages/Add';
import Complete from './pages/Complete';
import CardList from './pages/CardList';
import { AppContext, initialInputCard } from './AppContext';

export const companyList = [
  { name: '신한카드', color: '#E24141' },
  { name: '삼성카드', color: '#547CE4' },
  { name: 'KB국민카드', color: '#73BC6D' },
  { name: '하나카드', color: '#DE59B9' },
  { name: 'BC카드', color: '#04C09E' },
  { name: 'NH농협카드', color: '#E76E9A' },
  { name: '우리카드', color: '#F37D3B' },
  { name: '씨티카드', color: '#FBCD58' },
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
          <Add nextStatus="complete" />
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
