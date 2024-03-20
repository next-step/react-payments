import ModalProvider from '@/provider/modal-provider/ModalProvider';
import useStepContext from '@/provider/step-provider/hook/useStepContext';
import { AddCard, CardList, CardRegisterComplete } from '.';

const Stepper = () => {
  const { route } = useStepContext();

  if (route === 'LIST') {
    return <CardList />;
  }

  if (route === 'CARD') {
    return (
      <ModalProvider>
        <AddCard />
      </ModalProvider>
    );
  }

  if (route === 'COMPLETE') {
    return (
      <ModalProvider>
        <CardRegisterComplete />
      </ModalProvider>
    );
  }

  return <></>;
};

export default Stepper;
