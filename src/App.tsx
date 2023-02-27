import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddCard from './pages/AddCard';
import CardList from './pages/CardList';
import CompleteAddCard from './pages/CompleteAddCard';
import { PATH } from './utils/pathConstants';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={PATH.DEFAULT_PAGE} element={<CardList />} />
          <Route path={PATH.ADD_CARD} element={<AddCard />} />
          <Route path={PATH.COMPLETE_CARD} element={<CompleteAddCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
