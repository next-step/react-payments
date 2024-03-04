import { useState } from 'react';
import { PAGES } from './constants/pages';
import CardAdd from './pages/AddCard/AddCard';
import CardList from './pages/CardList/CardList';
import AddCardSuccess from './pages/AddCardSuccess/AddCardSuccess';

function App() {
  const [step, setStep] = useState<string>(PAGES.ADD_CARD_SUCCESS);

  return (
    <div className='app'>
      {step === PAGES.CARD_LIST && (
        <CardList onNext={() => setStep(PAGES.ADD_CARD)} />
      )}
      {step === PAGES.ADD_CARD && (
        <CardAdd onNext={() => setStep(PAGES.CARD_LIST)} />
      )}
      {step === PAGES.ADD_CARD_SUCCESS && (
        <AddCardSuccess onNext={() => setStep(PAGES.CARD_LIST)} />
      )}
    </div>
  );
}

export default App;
