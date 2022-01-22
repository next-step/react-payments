import { useRoutes } from 'react-router-dom';
import styled from 'styled-components';
import PageContainer from '@components/PageContainer';
import NewCard from '@/pages/NewCard';
import List from '@/pages/List';
import Done from '@/pages/Done';

function App() {
  const element = useRoutes([
    { path: '/', element: <List /> },
    { path: 'list', element: <List /> },
    { path: 'new', element: <NewCard /> },
    { path: 'done', element: <Done /> },
    { path: '*', element: <PageContainer>Not Found Page 🙅</PageContainer> },
  ]);

  return <Root>{element}</Root>;
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
