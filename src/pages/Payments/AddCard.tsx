import { initialFormData } from '@/constants/form';
import { Form } from '@/context/Form';
import { cardValidate } from '@/utils/cardValidations';
import PageTitle from '@components/@common/PageTitle';
import Button from '@components/@common/button/molecules/Button';
import CreditCard from '@components/Card/organisms/CreditCard';
import CardHolderName from '@components/CardForm/molecules/CardHolderName';
import CardNumber from '@components/CardForm/molecules/CardNumber';
import ExpirationDate from '@components/CardForm/molecules/ExpirationDate';
import PinNumber from '@components/CardForm/molecules/PinNumber';
import VerificationCode from '@components/CardForm/molecules/VerificationCode';

type AddCardProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export default function AddCard({ onPrevious, onNext }: AddCardProps) {
  const handleSubmit = () => {
    onNext();
  };

  return (
    <div className='root'>
      <div className='app'>
        <PageTitle onPrevious={onPrevious}>카드 추가</PageTitle>

        <Form
          initialValue={initialFormData}
          validate={cardValidate}
          onSubmit={handleSubmit}
        >
          {/* Card */}
          <CreditCard />

          {/* CardForm */}
          <CardNumber />
          <ExpirationDate />
          <CardHolderName />
          <VerificationCode />
          <PinNumber />

          <Button>다음</Button>
        </Form>
      </div>
    </div>
  );
}
