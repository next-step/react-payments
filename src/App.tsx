import { Route, Routes } from 'react-router-dom';
import CardRegistrationPage from './pages/CardRegistrationPage';
import CardListPage from './pages/CardListPage';
import CardRegistrationCompletePage from './pages/CardRegistrationPage/Complete';
import CardEditPage from './pages/CardEditPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="/edit" element={<CardEditPage />} />
        <Route path="/registration" element={<CardRegistrationPage />} />
        <Route path="/registration/complete" element={<CardRegistrationCompletePage />} />
      </Routes>
    </div>
  );
}

export default App;
