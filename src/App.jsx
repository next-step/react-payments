import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Routing from './Routing';
import { PaymentProvider } from './Context';
import './styles/index.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <PaymentProvider>
          <Routing />
        </PaymentProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
