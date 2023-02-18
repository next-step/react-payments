import React from "react";

import GlobalStyle from "./styles/GlobalStyle";
import ResetStyle from "./styles/ResetStyle";
import { AddCard } from "./views/cards";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <div className="App">
        <AddCard />
      </div>
    </>
  );
}

export default App;
