import React from "react";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import GlobalStyle from "./styles/GlobalStyle";
import ResetStyle from "./styles/ResetStyle";
import { AddCard } from "./views/cards";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <div className="App">
        <RouterProvider router={router} />
        {/* <AddCard /> */}
      </div>
    </>
  );
}

export default App;
