import CardAddPage from "pages/CardAddPage/CardAddPage";
import CardListPage from "pages/CardListPage/CardListPage";
import CardRegisterPage from "pages/CardRegisterPage/CardRegisterPage";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="root mt-20">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/add" element={<CardAddPage />} />
          <Route path="/add/complete" element={<CardRegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
