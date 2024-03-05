import { Route, Routes } from "react-router-dom";
import MyCards from "./domains/MyCards/MyCards";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/mycards">
          <Route index element={<MyCards />} />
          <Route path="register">
            <Route index element={<div>addcard</div>} />
            <Route path="completed" element={<div>added completed</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
