import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import PageContainer from '@components/PageContainer';
import NewCard from '@/pages/NewCard';
import List from '@/pages/List';
import Done from '@/pages/Done';
import { INIT_CARD_STATE } from '@/constants/index';

const CardContext = createContext({});

function App() {
  return (
    <Root>
      <CardContext.Provider value={INIT_CARD_STATE}>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='list' element={<List />} />
          <Route path='new' element={<NewCard />} />
          <Route path='done' element={<Done />} />
          <Route
            path='*'
            element={<PageContainer>Not Found Page 🙅</PageContainer>}
          />
        </Routes>
      </CardContext.Provider>
    </Root>
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
