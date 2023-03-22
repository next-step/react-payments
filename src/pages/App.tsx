import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { PaymentsContextProvider } from 'context/Payments';
import { VirtualKeyBoardContextProvider } from 'context/VirtualKeyBoard';
import Routes from 'routes';

function App() {
  return (
    <Layout>
      <VirtualKeyBoardContextProvider>
        <PaymentsContextProvider>
          <GlobalStyle />
          <Routes />
        </PaymentsContextProvider>
      </VirtualKeyBoardContextProvider>
    </Layout>
  );
}

const Layout = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  position: relative;
  border-radius: 15px;
`;

export default App;
