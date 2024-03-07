import { Link, Route, Routes } from "react-router-dom";
import MyCards from "./domains/MyCards/MyCards";
import RegisterPage from "./domains/RegisterPage/RegisterPage";

function App() {
  return (
    <div>
      <Routes>
        <Route
          index={true}
          element={
            <Link to="/mycards">
              <button>my cards</button>
            </Link>
          }
        ></Route>
        <Route path="mycards">
          <Route index element={<MyCards />} />
          <Route path="register">
            <Route index element={<RegisterPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
