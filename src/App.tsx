import './styles/index.css';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="root">
      <Outlet/>
    </div>
  );
}

export default App;
