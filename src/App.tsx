import './styles/index.css';
import { Route, Routes } from 'react-router-dom';
import { CardList, RegisterCard } from './pages';

function App() {
  return (
    <div className="root">
      <Routes>
        <Route path="/">
          <Route index element={<CardList/>}></Route>
          <Route path="register" element={<RegisterCard/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
