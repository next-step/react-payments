import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCard from "./pages/addCard";
import CompleteCard from "./pages/completeCard";
import CardList from "./pages/cardList";

export const CardContext = createContext();

function Payments() {
  const [id, setId] = useState(1);
  const [cards, setCards] = useState([]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <CardContext.Provider
              value={{
                cards,
                id,
                setCards,
                setId,
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
                setCards,
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
                setCards,
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
