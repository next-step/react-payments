import { Routes, Route } from "react-router-dom";

import { Global } from "@emotion/react";
import styled from "@emotion/styled";

import commonStyle from "./commonStyle";

import AddCardContainer from "./components/AddCard/AddCardContainer";
import CardListContainer from "./components/CardListContainer";

const App = () => {
  return (
    <Container>
      <Global styles={commonStyle} />
      <Routes>
        <Route path="/" element={<CardListContainer />} />
        <Route path="/add/card" element={<AddCardContainer />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  height: 90%;
  background: #fff;
  border-radius: 15px;
`;

export default App;
