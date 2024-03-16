import useStepContext from '@/provider/step-provider/useStepContext';

import CardInfoProvider from '@/provider/card-info-provider/CardInfoProvider';
import ModalProvider from '@/provider/modal-provider/ModalProvider';
import {AddCard, CardList, CardRegisterComplete} from '.';

const Stepper = () => {
  const {route} = useStepContext();

  if (route === 'LIST') {
    return <CardList />;
  }

  if (route === 'CARD') {
    return (
      <CardInfoProvider>
        <ModalProvider>
          <AddCard />
        </ModalProvider>
      </CardInfoProvider>
    );
  }

  if (route === 'COMPLETE') {
    return (
      <CardInfoProvider>
        <ModalProvider>
          <CardRegisterComplete />
        </ModalProvider>
      </CardInfoProvider>
    );
  }

  return <></>;
};

export default Stepper;
