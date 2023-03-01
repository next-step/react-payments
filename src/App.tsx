import './styles/index.css';
import { Outlet } from 'react-router-dom';
import { CardBoxProvider } from './provider/card-box';


function App() {
  return (
    <div className="root">
      <CardBoxProvider>
        <Outlet/>
      </CardBoxProvider>
    </div>
  );
}

export default App;
