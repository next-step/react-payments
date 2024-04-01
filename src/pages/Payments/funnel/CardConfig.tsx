import { useForm } from '@/hooks/useForm/useForm';
import { STEP } from '../payments.constant';
import { Card } from '@/components/card/Card';
import { Card as CardData, PaymentsCard } from '../payments.type';
import { Funnel } from '../payments.context';

export const CardConfig = () => {
  const { register, values, errors } = useForm<PaymentsCard>();
  const { setStep, data, setData } = Funnel.useContext();

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
          ...cardList.filter((card) => card.id !== tempCard.id),
          newPaymentCard,
        ],
        tempCard: null,
      };
    });

    setStep(STEP.CARD_LIST);
  };

  const isEditCard = data.cardList.some(
    (card) => card.id === data?.tempCard?.id
  );

  const optionalTitle = isEditCard
    ? '카드 정보 수정'
    : '카드등록이 완료되었습니다';

  return (
    <div>
      <div className='app flex-column-center'>
        <div className='flex-center'>
          <h2 className='page-title mb-10'>{optionalTitle}</h2>
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
          <button
            onClick={onNext}
            className='button-text button-box button-reset mt-50'
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
};
