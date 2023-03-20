import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import FormPage from './FormPage/FormPage';
import AliasPage from './AliasPage/AliasPage';
import MyCardListPage from './MyCardListPage/MyCardListPage';
import { PaymentsContextProvider } from 'context/Payments';
import { VirtualKeyBoardContextProvider } from 'context/VirtualKeyBoard';
function App() {
  return (
    <Layout>
      <VirtualKeyBoardContextProvider>
        <PaymentsContextProvider>
          <GlobalStyle />
          <Routes>
            <Route element={<MyCardListPage />} path="/"></Route>
            <Route element={<FormPage />} path="/add"></Route>
            <Route element={<AliasPage />} path="/alias"></Route>
          </Routes>
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
