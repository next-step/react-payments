import React from "react";
import { RouterProvider } from "react-router-dom";

import { CardsContextProvider } from "./contexts";
import router from "./router";
import GlobalStyle from "./styles/GlobalStyle";
import ResetStyle from "./styles/ResetStyle";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <div className="App">
        <CardsContextProvider>
          <RouterProvider router={router} />
        </CardsContextProvider>
      </div>
    </>
  );
}

export default App;
