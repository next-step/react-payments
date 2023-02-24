import { CardFormProvider } from './context/CardFormContext';
import { CardListProvider } from './context/CardListContext';
import RootRouter from './RootRouter';

import './styles/index.css';

function App() {
  return (
    <CardListProvider>
      <CardFormProvider>
        <RootRouter />
      </CardFormProvider>
    </CardListProvider>
  );
}

export default App;
