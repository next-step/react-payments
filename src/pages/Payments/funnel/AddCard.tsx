import { usePaymentsFunnel } from '../payments.context';
import { STEP } from '../payments.constant';
import { Card } from '@/molecules/card/Card';
import { useState } from 'react';
import { useForm } from '@/hooks/useForm';

// FIXME: 리팩터링 전, 코드 동작을 위한 임시 타입이기에 분리하지 않았습니다.
export interface CardFulfilledForm {
  number: boolean;
  expireDate: boolean;
  ownerName: boolean;
  securityCode: boolean;
  password: boolean;
}

export type CardFulfilledAction = React.Dispatch<
  React.SetStateAction<CardFulfilledForm>
>;

export const AddCard = () => {
  const { setStep } = usePaymentsFunnel();
  // FIXME: 각 컴포넌트에서 관리하는 것이 아니라 formLayer에서 해시맵으로 관리 불필요한 동기화 발생
  const [fieldsFulfilled, setFieldsFulfilled] = useState<CardFulfilledForm>({
    number: false,
    expireDate: false,
    ownerName: false,
    securityCode: false,
    password: false,
  });

  const formMethods = useForm();

  const isAllFieldsFulfilled = Object.values(fieldsFulfilled).every(
    (field) => field
  );

  const optaionalClassName = isAllFieldsFulfilled ? 'text-fulfilled' : '';

  const handleNext = () => {
    if (!isAllFieldsFulfilled) return;

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

      {/* FIXME: 각 컴포넌트에서 관리하는 것이 아니라 formLayer에서 해시맵으로 관리 */}
      <Card.Number formMethods={formMethods} />
      <Card.ExpireDate onFulfilled={setFieldsFulfilled} />
      <Card.OwnerName onFulfilled={setFieldsFulfilled} />
      <Card.SecurityCode onFulfilled={setFieldsFulfilled} />
      <Card.Password onFulfilled={setFieldsFulfilled} />

      {isAllFieldsFulfilled && (
        <div className='button-box' onClick={handleNext}>
          <span className={`button-text button-activate ${optaionalClassName}`}>
            다음
          </span>
        </div>
      )}
    </div>
  );
};
