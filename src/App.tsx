// import "./styles/index.css";

import React from "react";

import GlobalStyle from "./styles/GlobalStyle";
import { AddCard } from "./views/cards";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <AddCard />
      </div>
    </>
  );
}

export default App;
