import { RouterProvider } from 'react-router-dom';

import router from './routes/router';

const App = () => {
  return (
    <div id='app' className='flex-column-center wrap'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
