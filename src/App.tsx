import { PAGES } from './constants/pages';
import CardAdd from './pages/AddCard/AddCard';
import CardList from './pages/CardList/CardList';
import AddCardSuccess from './pages/AddCardSuccess/AddCardSuccess';
import { CardStateProvider } from './providers/CardState/CardStateProvider';
import { CardListProvider } from './providers/CardList/CardListProvider';
import useStepper from './hooks/useStepper';

function App() {
  const { Stepper, setStep } = useStepper(PAGES.CARD_LIST);

  return (
    <div className='app'>
      <CardListProvider>
        <CardStateProvider>
          <Stepper>
            <Stepper.Step name={PAGES.CARD_LIST}>
              <CardList
                onNext={() => setStep(PAGES.ADD_CARD)}
                onEdit={(id) => {
                  setStep(PAGES.ADD_CARD_SUCCESS, id);
                }}
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
          </Stepper>
        </CardStateProvider>
      </CardListProvider>
    </div>
  );
}

export default App;
