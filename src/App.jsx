import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import CardList from './pages/CardList';
import CardRegist from './pages/CardRegist';
import './styles/index.css';

const cardInfo = {
  nickname: '법인카드',
  company: '클린카드',
  number: '1111 - 2222 - oooo - oooo',
  owner: 'HYEWON',
  expire: { month: '08', year: '24' },
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CardList cardInfo={cardInfo} />} />
          <Route path="/regist" element={<CardRegist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
