import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Alias from './pages/Alias';
import Home from './pages/Home';
import New from './pages/New';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/alias" element={<Alias />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
