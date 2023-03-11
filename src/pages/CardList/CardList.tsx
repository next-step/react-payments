import { Link, useNavigate } from 'react-router-dom';

import { Box, Card } from '@/components/Common';
import { ROUTES } from '@/constants/routes';
import { useCardAddForm, useCardListContext } from '@/context';
import { Card as CardType } from '@/types/card';

export default function CardList() {
  const navigate = useNavigate();

  const { cardList, getUniqueKey } = useCardListContext();
  const { setCardForm } = useCardAddForm();

  const handleClickCard = (card: CardType) => () => {
    const { cardCompany, cardOwnerName, cardNumber, cardExpiration, cardAlias } = card;

    setCardForm((cardForm) => ({
      ...cardForm,
      cardCompany,
      cardOwnerName,
      cardNumber,
      cardExpiration,
      cardAlias,
    }));

    navigate(ROUTES.CARD.COMPLETED, { state: { haveDeleteButton: true } });
  };

  return (
    <div>
      <div className="root">
        <div className="app flex-column">
          <div className="flex-center">
            <h2 className="page-title mb-10">보유 카드</h2>
          </div>

          <Box className="card-container">
            <div className="card-box">
              <div className="empty-card">
                <Link className="w-100 h-100 flex-center" to={ROUTES.CARD.ADD}>
                  +
                </Link>
              </div>
            </div>

            {cardList.map((card) => {
              const key = getUniqueKey(card);

              return <Card key={key} type="small" isShowAlias onClick={handleClickCard(card)} {...card} />;
            })}
          </Box>
        </div>
      </div>
    </div>
  );
}
