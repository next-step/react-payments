import { useForm } from '@/hooks/useForm/useForm';
import { usePaymentsFunnel } from '../payments.context';
import { STEP } from '../payments.constant';
import { Card } from '@/components/card/Card';
import { Card as CardData } from '../payments.type';

export const AddCardComplete = () => {
  const { register, values, errors } = useForm();
  const { setStep, data, setData } = usePaymentsFunnel();

  if (!data?.tempCard) {
    setStep(STEP.CARD_LIST);

    return null;
  }

  const { tempCard, cardList } = data;
  const { ownerName } = tempCard;

  const isAllFieldsFulfilled = Object.values(errors).every((error) => !error);

  const onNext = () => {
    if (!isAllFieldsFulfilled) return;

    const { cardName } = values;

    setData((prevData) => {
      if (!prevData) return;

      const newPaymentCard = {
        ...tempCard,
        cardName: cardName || ownerName,
      };

      return {
        cardList: [
          ...cardList.filter((card) => card.createdAt !== tempCard.createdAt),
          newPaymentCard,
        ],
        tempCard: null,
      };
    });

    setStep(STEP.CARD_LIST);
  };

  return (
    <div>
      <div className='app flex-column-center'>
        <div className='flex-center'>
          <h2 className='page-title mb-10'>카드등록이 완료되었습니다.</h2>
        </div>
        <Card data={tempCard as unknown as CardData} isComplete={true} />
        <div className='input-container flex-center w-100'>
          <input
            className='input-underline w-75'
            type='text'
            placeholder='카드의 별칭을 입력해주세요.(선택)'
            {...register('cardName', {
              maxLength: 10,
            })}
          />
        </div>
        {isAllFieldsFulfilled && (
          <div onClick={onNext} className='button-box mt-50'>
            <span className='button-text'>다음</span>
          </div>
        )}
      </div>
    </div>
  );
};
