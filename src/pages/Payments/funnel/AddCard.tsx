import { CardInput } from '@/components/input/molecules/card/CardInput';
import { useForm } from '@/hooks/useForm/useForm';
import { STEP } from '../payments.constant';
import { Card } from '@/components/card/Card';
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
        },
      };
    });

    setStep(STEP.ADD_CARD_COMPLETE);
  };

  const isAllFieldsFulfilled = Object.values(errors).every((error) => !error);
  const optaionalClassName = isAllFieldsFulfilled ? 'text-fulfilled' : '';

  return (
    <div>
      <h2 className='page-title' onClick={handlePrev}>{`< 카드 추가`}</h2>
      <Card data={values as unknown as CardData} isComplete={false} />

      <CardInput.Number formMethods={formMethods} />
      <CardInput.ExpireDate formMethods={formMethods} />
      <CardInput.OwnerName formMethods={formMethods} />
      <CardInput.SecurityCode formMethods={formMethods} />
      <CardInput.Password formMethods={formMethods} />

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
