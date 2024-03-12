import { useState } from 'react';
import { PAGES } from './constants/pages';
import CardAdd from './pages/AddCard/AddCard';
import CardList from './pages/CardList/CardList';
import AddCardSuccess from './pages/AddCardSuccess/AddCardSuccess';
import { CardStateProvider } from './providers/CardState/CardStateProvider';

type PagesType = (typeof PAGES)[keyof typeof PAGES];

function App() {
  const [step, setStep] = useState<PagesType>(PAGES.CARD_LIST);

  return (
    <div className='app'>
      <CardStateProvider>
        {step === PAGES.CARD_LIST && (
          <CardList onNext={() => setStep(PAGES.ADD_CARD)} />
        )}
        {step === PAGES.ADD_CARD && (
          <CardAdd onNext={() => setStep(PAGES.ADD_CARD_SUCCESS)} />
        )}
        {step === PAGES.ADD_CARD_SUCCESS && (
          <AddCardSuccess onNext={() => setStep(PAGES.CARD_LIST)} />
        )}
      </CardStateProvider>
    </div>
  );
}

export default App;
