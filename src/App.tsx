import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Home, CardNew, CardAlias } from './pages';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<CardNew />} />
          <Route path="/alias" element={<CardAlias />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
