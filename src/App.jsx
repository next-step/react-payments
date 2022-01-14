import { Global } from "@emotion/react";
import styled from "@emotion/styled";

import commonStyle from "./commonStyle";

import CardListContainer from "./components/CardListContainer";

const App = () => {
  return (
    <Container>
      <Global styles={commonStyle} />
      <CardListContainer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 375px;
  height: 90%;
  background: #fff;
  border-radius: 15px;
`;

export default App;
