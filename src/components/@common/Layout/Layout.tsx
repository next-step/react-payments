import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Wrapper>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray00};
  height: 100vh;
`;
const Main = styled.main`
  background-color: ${({ theme }) => theme.color.white};

  max-width: 375px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
