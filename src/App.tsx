import { useState } from 'react';

import CardForm from './components/CardForm';
import CardFormDomain from './domains/cardFormDomain';

type Props = {
  domains: {
    cardFormDomain: CardFormDomain
  }
}

function App({ domains }: Props) {
  const [step, setStep] = useState('card-form');
  const { cardFormDomain } = domains;

  const handleClickGoBack = () => {
    setStep('card-list');
  };

  return (
    <div className="App">
      {step === 'card-list' && <h1>카드 목록</h1>}
      {step === 'card-form' && (
        <CardForm
          onClickGoBack={handleClickGoBack}
          cardFormDomain={cardFormDomain}
        />
      )}
    </div>
  );
}

export default App;
