import { useState } from 'react';
import CardAdd from './pages/AddCard/CardAdd';

function App() {
  const [step, setStep] = useState<number>(1);

  return (
    <div className='app'>
      {step === 1 && <CardAdd />}
    </div>
  );
}

export default App;
