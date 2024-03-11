import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CardEdit from './components/pages/CardEdit';
import CardForm from './components/pages/CardForm';
import CardList from './components/pages/CardList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/create" element={<CardForm />} />
        <Route path="/edit/:id" element={<CardEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
