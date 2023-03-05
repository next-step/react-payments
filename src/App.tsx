import './styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { CardProvider } from './provider/card-box';
import router from './router';


function App() {
  return (
    <div className="root">
      <CardProvider>
        <RouterProvider router={router}/>
      </CardProvider>
    </div>
  );
}

export default App;
