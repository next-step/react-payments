import { v4 as uuidv4 } from 'uuid';
import { CardInput } from '@/components/input/molecules/card/CardInput';
import { useForm } from '@/hooks/useForm/useForm';
import { Card } from '@/components/card/Card';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import {
  CARD_FIELDS,
  CARD_FORM,
} from '@/components/input/molecules/card/cardInput.constant';
import { STEP } from '../payments.constant';
import { Card as CardData } from '../payments.type';
import { Funnel } from '../payments.context';

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
  const { setStep, setData } = Funnel.useContext();
  const formMethods = useForm();
  const values = formMethods.values as unknown as CardData;
  const { errors } = formMethods;
  const fieldAmount = Object.values(CARD_FIELDS).reduce(
    (amount, field) => (amount += Object.values(field).length),
    0
  );

  const autoFocusMethods = useAutoFocus({
    amount: fieldAmount,
  });

  const handlePrev = () => setStep(STEP.CARD_LIST);
  const handleNext = () => {
    if (!isAllFieldsFulfilled) return;

    setData((prevData) => {
      if (!prevData) return;

      return {
        ...prevData,
        tempCard: {
          ...values,
          createdAt: new Date(),
          id: uuidv4(),
        },
      };
    });

    setStep(STEP.CARD_CONFIG);
  };

  const isAllFieldsFulfilled = Object.values(errors).every((error) => !error);
  const optaionalClassName = isAllFieldsFulfilled ? 'text-fulfilled' : '';

  return (
    <div>
      <button onClick={handlePrev} className='button-reset'>
        <h2 className='page-title'>{`< 카드 추가`}</h2>
      </button>
      <Card data={values as unknown as CardData} isComplete={false} />

      <CardInput.Number
        formMethods={formMethods}
        autoFocusMethods={autoFocusMethods}
        fields={CARD_FORM.CARD_NUMBER}
      />
      <CardInput.ExpireDate
        formMethods={formMethods}
        autoFocusMethods={autoFocusMethods}
        fields={CARD_FORM.EXPIRE_DATE}
      />
      <CardInput.OwnerName
        formMethods={formMethods}
        autoFocusMethods={autoFocusMethods}
        fields={CARD_FORM.OWNER_NAME}
      />
      <CardInput.SecurityCode
        formMethods={formMethods}
        autoFocusMethods={autoFocusMethods}
        fields={CARD_FORM.SECURITY_CODE}
      />
      <CardInput.Password
        formMethods={formMethods}
        autoFocusMethods={autoFocusMethods}
        fields={CARD_FORM.PASSWORD}
      />

      {isAllFieldsFulfilled && (
        <div className='button-box' onClick={handleNext}>
          <button
            className={`button-text button-reset button-activate ${optaionalClassName}`}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
};
