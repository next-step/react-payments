import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddCard from './pages/AddCard';
import CardList from './pages/CardList';
import CompleteAddCard from './pages/CompleteAddCard';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/complete-card" element={<CompleteAddCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
