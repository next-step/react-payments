import { Formatter } from '@/utils/formatter';
import { SYMBOL } from '@/constants/symbol';
import { useForm } from '@/hooks/useForm/useForm';
import { usePaymentsFunnel } from '../payments.context';
import { STEP } from '../payments.constant';

const ELLIPSIS_LENGTH = 11;

export const AddCardComplete = () => {
  const { register, values, errors } = useForm();
  const { setStep, data, setData } = usePaymentsFunnel();

  if (!data?.tempCard) {
    setStep(STEP.CARD_LIST);

    return null;
  }

  const { tempCard, cardList } = data;
  const {
    numberFirst,
    numberSecond,
    numberThird,
    numberFourth,
    expireMonth,
    expireYear,
    ownerName,
  } = tempCard;

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

  const expireDate = `${expireMonth} / ${expireYear}`;

  return (
    <div>
      <div className='app flex-column-center'>
        <div className='flex-center'>
          <h2 className='page-title mb-10'>카드등록이 완료되었습니다.</h2>
        </div>
        <div className='card-box'>
          <div className='big-card'>
            <div className='card-top'>
              <span className='card-text__big'>클린카드</span>
            </div>
            <div className='card-middle'>
              <div className='big-card__chip'></div>
            </div>
            <div className='card-bottom'>
              <div className='card-bottom__number card-text__big'>
                <span>
                  {Formatter.segment(numberFirst, {
                    separator: SYMBOL.HYPHEN,
                    length: 4,
                  })}
                </span>
                <span>
                  {Formatter.segment(numberSecond, {
                    separator: SYMBOL.HYPHEN,
                    length: 4,
                  })}
                </span>
                <span>
                  {Formatter.segment(
                    numberThird && Formatter.masking(numberThird),
                    {
                      separator: SYMBOL.HYPHEN,
                      length: 4,
                    }
                  )}
                </span>
                <span>
                  {(numberFourth && Formatter.masking(numberFourth)) || ''}
                </span>
              </div>
              <div className='card-bottom__info'>
                <span className='card-text'>
                  {Formatter.ellipsis(ownerName, ELLIPSIS_LENGTH)}
                </span>
                <span className='card-text'>{expireDate}</span>
              </div>
            </div>
          </div>
        </div>
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
