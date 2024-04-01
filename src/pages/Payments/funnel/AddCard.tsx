import { v4 as uuidv4 } from 'uuid';
import { CardInput } from '@/components/input/molecules/card/CardInput';
import { useForm } from '@/hooks/useForm/useForm';
import { Card } from '@/components/card/Card';
import { useAutoFocus } from '@/hooks/useAutoFocus/useAutoFocus';
import { CARD_FIELDS } from '@/components/input/molecules/card/cardInput.constant';
import { Modal } from '@/components/modal/Modal';
import { STEP } from '../payments.constant';
import { CardForm } from '../payments.type';
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
  const { isOpen, openModal, closeModal } = Modal.use();
  const { setStep, setData } = Funnel.useContext();
  const formMethods = useForm<CardForm>();
  const { values, errors } = formMethods;
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

      const newCard = {
        ...values,
        createdAt: new Date(),
        id: uuidv4(),
      };

      const newContextData = {
        ...prevData,
        tempCard: newCard,
      };

      return newContextData;
    });

    setStep(STEP.CARD_CONFIG);
  };

  const isAllFieldsFulfilled = Object.values(errors).every((error) => !error);
  const optaionalClassName = isAllFieldsFulfilled ? 'text-fulfilled' : '';

  return (
    <>
      <div>
        <button onClick={handlePrev} className='button-reset'>
          <h2 className='page-title'>{`< 카드 추가`}</h2>
        </button>
        <Card onClick={openModal} data={values} isComplete={false} />

        <CardInput.Number
          formMethods={formMethods}
          autoFocusMethods={autoFocusMethods}
        />
        <CardInput.ExpireDate
          formMethods={formMethods}
          autoFocusMethods={autoFocusMethods}
        />
        <CardInput.OwnerName
          formMethods={formMethods}
          autoFocusMethods={autoFocusMethods}
        />
        <CardInput.SecurityCode
          formMethods={formMethods}
          autoFocusMethods={autoFocusMethods}
        />
        <CardInput.Password
          formMethods={formMethods}
          autoFocusMethods={autoFocusMethods}
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

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <CardInput.Company formMethods={formMethods} closeModal={closeModal} />
      </Modal>
    </>
  );
};
