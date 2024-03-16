import { createActorContext } from '@xstate/react';
import { PAGES } from './constants/pages';
import CardAdd from './pages/AddCard/AddCard';
import CardList from './pages/CardList/CardList';
import AddCardSuccess from './pages/AddCardSuccess/AddCardSuccess';
import useStepper from './hooks/useStepper';
import { cardMachine } from './machine/cardMachine';
import EditCardName from './pages/EditCardName/EditCardName';

export const CardContext = createActorContext(cardMachine);

function App() {
  const { Stepper, setStep } = useStepper(PAGES.CARD_LIST);

  return (
    <div className='app'>
      <CardContext.Provider>
        <Stepper>
          <Stepper.Step name={PAGES.CARD_LIST}>
            <CardList
              onNext={() => setStep(PAGES.ADD_CARD)}
              onEdit={(id) => setStep(PAGES.EDIT_CARD_NAME, id)}
            />
          </Stepper.Step>
          <Stepper.Step name={PAGES.ADD_CARD}>
            <CardAdd
              onNext={() => setStep(PAGES.ADD_CARD_SUCCESS)}
              onGoBack={() => setStep(PAGES.CARD_LIST)}
            />
          </Stepper.Step>
          <Stepper.Step name={PAGES.ADD_CARD_SUCCESS}>
            <AddCardSuccess onNext={() => setStep(PAGES.CARD_LIST)} />
          </Stepper.Step>
          <Stepper.Step name={PAGES.EDIT_CARD_NAME}>
            <EditCardName onNext={() => setStep(PAGES.CARD_LIST)} />
          </Stepper.Step>
        </Stepper>
      </CardContext.Provider>
    </div>
  );
}

export default App;
