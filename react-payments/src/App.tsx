import { Route, BrowserRouter, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
