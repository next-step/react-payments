import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddCard from './pages/AddCard.js';
import CardAdded from './pages/CardAdded.js';
import CardList from './pages/CardList.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCard />} />
        <Route path="/card-list" element={<CardList />} />
        <Route path="/card-added" element={<CardAdded />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
