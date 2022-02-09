import { Routes, Route } from "react-router-dom";

import { Global } from "@emotion/react";
import styled from "@emotion/styled";

import commonStyle from "./commonStyle";

import AddCardPage from "./page/AddCardPage";
import CardListPage from "./page/CardListPage";
import AddCardCompletePage from "./page/AddCardCompletePage";

const App = () => {
  return (
    <Container>
      <Global styles={commonStyle} />
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="/add/card" element={<AddCardPage />} />
        <Route
          path="/add/card/complete"
          element={<AddCardCompletePage />}
        />
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
