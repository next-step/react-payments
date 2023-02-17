import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
