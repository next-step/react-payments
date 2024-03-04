import PageTitle from '@components/@common/PageTitle';
import Button from '@components/@common/button/molecules/Button';
import CardBottom from '@components/Card/atoms/CardBottom';
import CardBox from '@components/Card/atoms/CardBox';
import CardMiddle from '@components/Card/atoms/CardMiddle';
import CardSize from '@components/Card/atoms/CardSize';
import CardText from '@components/Card/atoms/CardText';
import CardTop from '@components/Card/atoms/CardTop';
import EmptyCard from '@components/Card/atoms/EmptyCard';
import CardHolderName from '@components/CardForm/molecules/CardHolderName';
import CardNumber from '@components/CardForm/molecules/CardNumber';
import ExpirationDate from '@components/CardForm/molecules/ExpirationDate';
import PinNumber from '@components/CardForm/molecules/PinNumber';
import VerificationNumber from '@components/CardForm/molecules/VerificationNumber';

type AddCardProps = {
  onNext: () => void;
  onPrevious: () => void;
};

export default function AddCard({ onNext, onPrevious }: AddCardProps) {
  return (
    <div className='root'>
      <div className='app'>
        <PageTitle onPrevious={onPrevious}>카드 추가</PageTitle>

        {/* Card */}
        <CardBox>
          <EmptyCard>
            <CardTop></CardTop>

            <CardMiddle>
              <CardSize size='small' chip></CardSize>
            </CardMiddle>

            <CardBottom>
              <CardBottom as='info'>
                <CardText>NAME</CardText>
                <CardText>MM / YY</CardText>
              </CardBottom>
            </CardBottom>
          </EmptyCard>
        </CardBox>

        {/* CardForm */}
        <CardNumber />
        <ExpirationDate />
        <CardHolderName />
        <VerificationNumber />
        <PinNumber />

        <Button onButtonClick={onNext}>다음</Button>
      </div>
    </div>
  );
}
