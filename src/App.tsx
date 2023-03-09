import { CardFormProvider } from './context/CardFormContext';
import { CardListProvider } from './context/CardListContext';
import RootRouter from './RootRouter';

import './index.css';
import { PropsWithChildren } from 'react';
import { ModalProvider } from './context/ModalContext';
import { ModalContainer } from './components/Modal';

function RootContainer({ children }: PropsWithChildren) {
  return <div className="bg-white w-96 min-w-[384px] h-[700px] relative overflow-hidden">{children}</div>;
}

function App() {
  return (
    <CardListProvider>
      <CardFormProvider>
        <RootContainer>
          <ModalProvider>
            <ModalContainer />
            <RootRouter />
          </ModalProvider>
        </RootContainer>
      </CardFormProvider>
    </CardListProvider>
  );
}

export default App;
