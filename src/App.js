import React, { useState } from 'react';
import Add from './pages/Add';
import Complete from './pages/Complete';
import CardList from './pages/CardList';
import { AppContext, initialInputCard } from './AppContext';

function App() {
  const [status, setRouteStatus] = useState('list');
  const [cardList, setCardList] = useState([]);
  const [inputCard, setInputCard] = useState(initialInputCard);
  const [targetCard, setTargetCard] = useState({});

  return (
    <AppContext.Provider
      value={{
        status,
        setRouteStatus,
        cardList,
        setCardList,
        inputCard,
        setInputCard,
        targetCard,
        setTargetCard,
      }}
    >
      <div className="App">
        {status === 'list' ? (
          <CardList />
        ) : status === 'add' ? (
          <Add nextStatus="complete" />
        ) : status === 'complete' ? (
          <Complete nextStatus="list" />
        ) : status === 'modify' ? (
          <Complete nextStatus="list" mode="modify" />
        ) : (
          'Error: 관리자에게 문의해 주세요'
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
