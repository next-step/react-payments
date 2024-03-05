import { Route, Routes } from "react-router-dom";
import MyCards from "./domains/MyCards/MyCards";
import CardRegister from "./domains/cardRegister/CardRegister";
import CardResult from "./domains/CardResult/CardResult";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/mycards">
          <Route index element={<MyCards />} />
          <Route path="register">
            <Route index element={<CardRegister />} />
            <Route path="result" element={<CardResult />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
