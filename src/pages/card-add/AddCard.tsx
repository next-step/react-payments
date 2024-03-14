import Card from '@/components/card/Card';
import PageTitle from '@/components/common/page-title/PageTitle';
import { useContext } from 'react';
import CardForm from './components/card-form/CardForm';

import { CardInfoContext } from '@/provider/card-info-provider/CardInfoProvider';
import ModalProvider from '@/provider/modal-provider/ModalProvider';
import { StepContext } from '@/provider/step-provider/StepProvider';

const AddCard = () => {
  const { cardState } = useContext(CardInfoContext);
  const { navigate } = useContext(StepContext);
  const goToPage = () => navigate('LIST');
  return (
    <div className="app">
      <ModalProvider>
        <PageTitle>
          <div onClick={goToPage}>{'< 카드 추가'}</div>
        </PageTitle>
        <Card {...cardState} />
        <CardForm />
      </ModalProvider>
    </div>
  );
};

export default AddCard;
