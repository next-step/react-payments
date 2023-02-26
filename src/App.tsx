import { CardFormProvider } from './context/CardFormContext';
import { CardListProvider } from './context/CardListContext';
import RootRouter from './RootRouter';

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
