import { CardFormProvider } from './context/CardFormContext';
import { CardListProvider } from './context/CardListContext';
import RootRouter from './RootRouter';

import './index.css';
import { PropsWithChildren } from 'react';

function RootContainer({ children }: PropsWithChildren) {
  return <div className="bg-white w-96 min-w-[384px] h-[700px] relative rounded-2xl overflow-hidden">{children}</div>;
}

function App() {
  return (
    <CardListProvider>
      <CardFormProvider>
        <RootContainer>
          <RootRouter />
        </RootContainer>
      </CardFormProvider>
    </CardListProvider>
  );
}

export default App;
