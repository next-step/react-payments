import Card from '@/components/card/Card';
import PageTitle from '@/components/common/page-title/PageTitle';
import CardForm from './components/card-form/CardForm';

import useCardContext from '@/provider/card-info-provider/hook/useCardContext';
import useStepContext from '@/provider/step-provider/useStepContext';
import useModalContext from '@/provider/modal-provider/hook/useModalContext';

const AddCard = () => {
  const { cardState } = useCardContext();
  const { navigate } = useStepContext();
  const { cardBrand, toggle } = useModalContext();
  const goToPage = () => navigate('LIST');

  return (
    <div className="app">
      <PageTitle>
        <div onClick={goToPage}>{'< 카드 추가'}</div>
      </PageTitle>
      <Card {...cardBrand} {...cardState} onClick={toggle} />
      <CardForm />
    </div>
  );
};

export default AddCard;
