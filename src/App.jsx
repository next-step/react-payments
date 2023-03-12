import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Routing from './Routing';
import { PaymentProvider } from './Context';
import { ThemeProvider } from 'styled-components';
import './styles/index.css';

const theme = {};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <PaymentProvider>
            <Routing />
          </PaymentProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
