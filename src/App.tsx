import styled from 'styled-components';
import NewCard from '@/pages/NewCard';

function App() {
  return (
    <Root>
      <AppContainer>
        <NewCard />
      </AppContainer>
    </Root>
  );
}

const Root = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
  margin: 0 auto;
`;

const AppContainer = styled.div`
  height: 100%;
  padding: 16px 24px;
`;

export default App;
