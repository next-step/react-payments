import './styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { CardBoxProvider } from './provider/card-box';
import router from './router';


function App() {
  return (
    <div className="root">
      <CardBoxProvider>
        <RouterProvider router={router}/>
      </CardBoxProvider>
    </div>
  );
}

export default App;
