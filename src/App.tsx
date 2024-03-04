import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateCardForm from './components/templates/CreateCardForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateCardForm />} />
      </Routes>
    </Router>
  );
}

export default App;
