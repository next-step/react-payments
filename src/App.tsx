import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [step, setStep] = useState('card-form');

  const handleClickGoBack = () => {
    setStep('card-list');
  };

  return (
    <div className="App">
      {step === 'card-list' && <h1>카드 목록</h1>}
      {step === 'card-form' && (
        <Header onClickGoBack={handleClickGoBack} />
      )}
    </div>
  );
}

export default App;
