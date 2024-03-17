import useStepper from '../../hooks/useStepper';
import { PAGES } from '../../constants/pages';
import CardAdd from '../../pages/AddCard/AddCard';
import CardList from '../../pages/CardList/CardList';
import AddCardSuccess from '../../pages/AddCardSuccess/AddCardSuccess';
import EditCardName from '../../pages/EditCardName/EditCardName';

export const CardStepper = () => {
  const { Stepper, setStep } = useStepper();
  return (
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
  );
};
