import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCard from "./pages/addCard";
import CompleteCard from "./pages/completeCard";
import CardList from "./pages/cardList";

export const CardContext = createContext();

function Payments() {
  const [cards, setCards] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CardContext.Provider
              value={{
                cards,
                setCards,
              }}
            >
              <AddCard />
            </CardContext.Provider>
          }
        />
        <Route
          path="/complete"
          element={
            <CardContext.Provider
              value={{
                cards,
              }}
            >
              <CompleteCard />
            </CardContext.Provider>
          }
        />
        <Route
          path="/list"
          element={
            <CardContext.Provider
              value={{
                cards,
              }}
            >
              <CardList />
            </CardContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Payments;
