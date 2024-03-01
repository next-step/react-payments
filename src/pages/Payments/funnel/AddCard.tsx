import { usePaymentsFunnel } from '../payments.context';
import { STEP } from '../payments.constant';
import { PaymentsStepKey } from '../payments.type';
import { Card } from '@/molecules/card/Card';

export const AddCard = () => {
  const { setStep } = usePaymentsFunnel();

  const handleNext = () => {
    // TODO: inputFields validation
    setStep(STEP.ADD_CARD_COMPLETE);
  };

  const handlePrev = () => {
    setStep(STEP.CARD_LIST);
  };

  return (
    <div>
      <h2 className='page-title' onClick={handlePrev}>{`< 카드 추가`}</h2>
      <div className='card-box'>
        <div className='empty-card'>
          <div className='card-top'></div>
          <div className='card-middle'>
            <div className='small-card__chip'></div>
          </div>
          <div className='card-bottom'>
            <div className='card-bottom__info'>
              <span className='card-text'>NAME</span>
              <span className='card-text'>MM / YY</span>
            </div>
          </div>
        </div>
      </div>

      <Card.Number />
      <Card.ExpireDate />
      <Card.OwnerName />
      <Card.SecurityCode />
      <Card.Password />

      <div className='button-box' onClick={handleNext}>
        <span className='button-text'>다음</span>
      </div>

      {/* Buttons */}
      {Object.keys(STEP).map((key) => {
        return (
          <button
            key={key}
            onClick={() => setStep(STEP[key as PaymentsStepKey])}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
