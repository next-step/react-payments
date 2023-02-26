import './styles/index.css';
import { Outlet } from 'react-router-dom';
import { CardBoxProvider } from './provider/card-box';
import { ModalProvider } from './provider/modal';


function App() {
  return (
    <div className="root">
      <ModalProvider>
        <CardBoxProvider>
          <Outlet/>
        </CardBoxProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
