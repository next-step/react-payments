import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CardCreate from './components/pages/CardCreate';
import CardEdit from './components/pages/CardEdit';
import CardList from './components/pages/CardList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/create" element={<CardCreate />} />
        <Route path="/edit/:id" element={<CardEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
