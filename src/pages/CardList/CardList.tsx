import { Link, useNavigate } from 'react-router-dom';

import { Box, Card } from '@/components/Common';
import { Card as CardType } from '@/types/card';
import { ROUTES } from '@/constants/routes';
import {
  useCardAliasContext,
  useCardExpirationContext,
  useCardListContext,
  useCardNumberContext,
  useCardOwnerNameContext,
  useCardSelectModalContext,
} from '@/context';

export default function CardList() {
  const navigate = useNavigate();
  const { cardList } = useCardListContext();

  const { setSelectedCard } = useCardSelectModalContext();
  const { setCardOwnerName } = useCardOwnerNameContext();
  const { setCardNumber } = useCardNumberContext();
  const { setCardExpiration } = useCardExpirationContext();
  const { setCardAlias } = useCardAliasContext();

  const handleClickCard = (card: CardType) => () => {
    const { selectedCard, cardOwnerName, cardNumber, cardExpiration, cardAlias } = card;

    setSelectedCard(selectedCard);
    setCardOwnerName(cardOwnerName);
    setCardNumber(cardNumber);
    setCardExpiration(cardExpiration);
    setCardAlias(cardAlias);

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
                <Link className="w-25 text-center" to={ROUTES.CARD.ADD}>
                  +
                </Link>
              </div>
            </div>

            {cardList.map((card) => {
              const {
                cardNumber: { num1, num2, num3, num4 },
              } = card;
              const key = num1 + num2 + num3 + num4;

              return <Card key={key} type="small" isShowAlias onClick={handleClickCard(card)} {...card} />;
            })}
          </Box>
        </div>
      </div>
    </div>
  );
}
