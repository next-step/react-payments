import { STEP } from '../payments.constant';
import { usePaymentsFunnel } from '../payments.context';
import { PaymentsCard } from '../payments.type';

export const CardList = () => {
  const { setStep, data } = usePaymentsFunnel();

  const cardList = data?.cardList || [];

  const handleAddCard = () => {
    setStep(STEP.ADD_CARD);
  };

  return (
    <div>
      <div className='flex-center'>
        <h2 className='page-title mb-10'>보유 카드</h2>
      </div>

      {cardList.map((card, idx) => (
        <Card key={idx} data={card} />
      ))}

      <div className='card-box' onClick={handleAddCard}>
        <div className='empty-card'>+</div>
      </div>
    </div>
  );
};

const Card = ({ data }: { data: PaymentsCard }) => {
  const {
    cardName,
    numberFirst,
    numberSecond,
    numberThird,
    numberFourth,
    expireMonth,
    expireYear,
  } = data;

  const handleSelect = () => {
    console.log('card selected');
  };

  return (
    <div className='card-box flex-column-center gap-5'>
      <div className='small-card' onClick={handleSelect}>
        <div className='card-top'>
          <span className='card-text'>{cardName}</span>
        </div>
        <div className='card-middle'>
          <div className='small-card__chip'></div>
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__number'>
            <span className='card-text'>
              {numberFirst} - {numberSecond} - {numberThird} - {numberFourth}
            </span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text'>
              {expireMonth} / {expireYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
