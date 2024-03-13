import { STEP } from '../payments.constant';
import { usePaymentsFunnel } from '../payments.context';
import { Card } from '@/components/card/Card';
import { Card as CardData } from '../payments.type';

export const CardList = () => {
  const { setStep, setData, data } = usePaymentsFunnel();

  const cardList = data?.cardList || [];

  const handleAddCard = () => {
    setStep(STEP.ADD_CARD);
  };

  const sortedCardList = cardList.sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  const handleCardClick = (card: CardData) => {
    setData((prev) => {
      if (!prev) return;

      return {
        ...prev,
        tempCard: card,
      };
    });

    setStep(STEP.ADD_CARD_COMPLETE);
  };

  const handleDelete = (card: CardData) => {
    setData((prev) => {
      if (!prev) return;

      return {
        ...prev,
        cardList: prev.cardList.filter(
          (prevCard) => prevCard.createdAt !== card.createdAt
        ),
      };
    });
  };

  return (
    <div>
      <h2 className='page-title mb-10'>보유 카드</h2>
      <div className='card-list'>
        {sortedCardList.map((card) => {
          const { cardName } = card;

          return (
            <div
              key={card.createdAt.toString()}
              className='flex-column-center gap-5'
            >
              <Card
                data={card}
                onClick={() => handleCardClick(card)}
                isComplete={true}
              />
              <div className='flex-row-between w-50'>
                <div className='card-name'>{cardName}</div>
                <span>|</span>
                <div className='card-name' onClick={() => handleDelete(card)}>
                  삭제
                </div>
              </div>
            </div>
          );
        })}
        <div className='card-box' onClick={handleAddCard}>
          <div className='empty-card'>+</div>
        </div>
      </div>
    </div>
  );
};

// const Card = ({ data }: PaymentsCardProps) => {
//   const { setStep, setData } = usePaymentsFunnel();

//   const {
//     cardName,
//     ownerName,
//     numberFirst,
//     numberSecond,
//     numberThird,
//     numberFourth,
//     expireMonth,
//     expireYear,
//   } = data;

//   const handleCardClick = () => {
//     setData((prev) => {
//       if (!prev) return;

//       return {
//         ...prev,
//         tempCard: data,
//       };
//     });

//     setStep(STEP.ADD_CARD_COMPLETE);
//   };

//   const handleDelete = () => {
//     setData((prev) => {
//       if (!prev) return;

//       return {
//         ...prev,
//         cardList: prev.cardList.filter(
//           (card) => card.createdAt !== data.createdAt
//         ),
//       };
//     });
//   };

//   return (
//     <div className='flex-column-center'>
//       <div className='card-box'>
//         <div className='small-card' onClick={handleCardClick}>
//           <div className='card-top'>
//             <span className='card-text'>펭구카드</span>
//           </div>
//           <div className='card-middle'>
//             <div className='small-card__chip'></div>
//           </div>
//           <div className='card-bottom'>
//             <div className='card-bottom__number'>
//               <span>
//                 {Formatter.segment(numberFirst, {
//                   separator: SYMBOL.HYPHEN,
//                   length: 4,
//                 })}
//               </span>
//               <span>
//                 {Formatter.segment(numberSecond, {
//                   separator: SYMBOL.HYPHEN,
//                   length: 4,
//                 })}
//               </span>
//               <span>
//                 {Formatter.segment(
//                   numberThird && Formatter.masking(numberThird),
//                   {
//                     separator: SYMBOL.HYPHEN,
//                     length: 4,
//                   }
//                 )}
//               </span>
//               <span>
//                 {(numberFourth && Formatter.masking(numberFourth)) || ''}
//               </span>
//             </div>
//             <div className='card-bottom__info'>
//               <span className='card-text'>
//                 {Formatter.ellipsis(ownerName, 10)}
//               </span>
//               <span className='card-text'>{`${expireMonth} / ${expireYear}`}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
