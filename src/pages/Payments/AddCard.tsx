import PageTitle from '@components/@common/PageTitle';
import Button from '@components/@common/button/molecules/Button';
import Card from '@components/Card/organisms/CreditCard';
import CardHolderName from '@components/CardForm/molecules/CardHolderName';
import CardNumber from '@components/CardForm/molecules/CardNumber';
import ExpirationDate from '@components/CardForm/molecules/ExpirationDate';
import PinNumber from '@components/CardForm/molecules/PinNumber';
import VerificationCode from '@components/CardForm/molecules/VerificationCode';

type AddCardProps = {
  onPrevious: () => void;
};

export default function AddCard({ onPrevious }: AddCardProps) {
  return (
    <div className='root'>
      <div className='app'>
        <PageTitle onPrevious={onPrevious}>카드 추가</PageTitle>

        {/* Card */}
        <Card />

        {/* CardForm */}
        <CardNumber />
        <ExpirationDate />
        <CardHolderName />
        <VerificationCode />
        <PinNumber />

        <Button>다음</Button>
      </div>
    </div>
  );
}
