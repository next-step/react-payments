import { useState } from 'react';
import CardAdd from './pages/AddCard/CardAdd';
import CardList from './pages/CardList/CardList';
import { PAGES } from './constants/pages';

function App() {
  const [step, setStep] = useState<string>(PAGES.CARD_LIST);

  return (
    <div className='app'>
      {step === PAGES.CARD_LIST && (
        <CardList onNext={() => setStep(PAGES.CARD_ADD)} />
      )}
      {step === PAGES.CARD_ADD && (
        <CardAdd onNext={() => setStep(PAGES.CARD_LIST)} />
      )}
    </div>
  );
}

export default App;
