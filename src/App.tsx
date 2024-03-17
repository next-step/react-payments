import { createActorContext } from '@xstate/react';
import { cardMachine } from './machine/cardMachine';
import { CardStepper } from './pages/CardStepper/CardStepper';

export const CardContext = createActorContext(cardMachine);

function App() {
  return (
    <div className='app'>
      <CardContext.Provider>
        <CardStepper />
      </CardContext.Provider>
    </div>
  );
}

export default App;
