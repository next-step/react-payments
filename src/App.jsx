import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Routing from "./Routing";
import "./styles/index.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
