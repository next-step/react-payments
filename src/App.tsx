import { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { CardContext } from '@/context/cardContext';
import PageContainer from '@components/PageContainer';
import NewCard from '@/pages/NewCard';
import List from '@/pages/List';
import Done from '@/pages/Done';
import { INIT_CARD_STATE } from '@/constants/index';

function App() {
  const [cardState, setCardState] = useState(INIT_CARD_STATE);
  const [cardList, setCardList] = useState([] as typeof cardState[]);

  return (
    <CardContext.Provider
      value={{ cardState, setCardState, cardList, setCardList }}
    >
      <Root>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='list' element={<List />} />
          <Route path='new' element={<NewCard />} />
          <Route path='done' element={<Done />}>
            <Route path=':id' element={<Done />} />
          </Route>
          <Route path='edit' element={<Done />}>
            <Route path=':id' element={<Done />} />
          </Route>
          <Route
            path='*'
            element={<PageContainer>Not Found Page 🙅</PageContainer>}
          />
        </Routes>
      </Root>
    </CardContext.Provider>
  );
}

export const Root = styled.div`
  background-color: #fff;
  width: 100vw;
  min-width: 375px;
  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
`;

export default App;
