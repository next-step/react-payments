import { Formatter } from '@/utils/formatter';
import { STEP } from '../payments.constant';
import { usePaymentsFunnel } from '../payments.context';
import { PaymentsCardProps } from '../payments.type';
import { SYMBOL } from '@/constants/symbol';

export const CardList = () => {
  const { setStep, data } = usePaymentsFunnel();

  const cardList = data?.cardList || [];

  const handleAddCard = () => {
    setStep(STEP.ADD_CARD);
  };

  const sortedCardList = cardList.sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return (
    <div>
      <h2 className='page-title mb-10'>보유 카드</h2>

      <div className='card-list'>
        {sortedCardList.map((card, idx) => (
          <Card key={idx} data={card} />
        ))}
        <div className='card-box' onClick={handleAddCard}>
          <div className='empty-card'>+</div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ data }: PaymentsCardProps) => {
  const { setStep, setData } = usePaymentsFunnel();

  const {
    cardName,
    ownerName,
    numberFirst,
    numberSecond,
    numberThird,
    numberFourth,
    expireMonth,
    expireYear,
  } = data;

  const handleCardClick = () => {
    setData((prev) => {
      if (!prev) return;

      return {
        ...prev,
        tempCard: data,
      };
    });

    setStep(STEP.ADD_CARD_COMPLETE);
  };

  return (
    <div className='flex-column-center'>
      <div className='card-box'>
        <div className='small-card' onClick={handleCardClick}>
          <div className='card-top'>
            <span className='card-text'>펭구카드</span>
          </div>
          <div className='card-middle'>
            <div className='small-card__chip'></div>
          </div>
          <div className='card-bottom'>
            <div className='card-bottom__number'>
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
              <div className='card-bottom__info'>
                <span className='card-text'>
                  {Formatter.ellipsis(ownerName, 10)}
                </span>
                <span className='card-text'>{`${expireMonth} / ${expireYear}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card-name'>{cardName}</div>
    </div>
  );
};
