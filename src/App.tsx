import { Link, Route, Routes } from "react-router-dom";
import MyCards from "./domains/MyCards/MyCards";
import RegisterPage from "./domains/RegisterPage/RegisterPage";
import ModifyPage from "./domains/MyCards/ModifyPage/ModifyPage";

function App() {
  return (
    <div>
      <Routes>
        <Route
          index={true}
          element={<Link to="/mycards">my cards</Link>}
        ></Route>
        <Route path="mycards">
          <Route index element={<MyCards />} />
          <Route path="register">
            <Route index element={<RegisterPage />} />
          </Route>
          <Route path="modify">
            <Route index element={<ModifyPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
