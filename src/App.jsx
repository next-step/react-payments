import { Route, Routes } from "react-router-dom";
const Home = () => <h2>Home</h2>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
