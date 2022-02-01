import { MdCancel } from "react-icons/md";
import useCardListSelector from "../../stores/cardList/hooks/useCardListSelector";
import Styled from "./CardListPage.styles";
import type { Card as CardModel } from "../../@types";
import Card from "../../components/Card/Card";
import { useEffect } from "react";
import useCardListDispatch from "../../stores/cardList/hooks/useCardListDispatch";
import cardListActions from "../../stores/cardList/cardListActions";
import { PATH } from "../../constants/route";

const CardListPage = () => {
  const cardListDispatch = useCardListDispatch();
  const cardList: CardModel[] = useCardListSelector((state) =>
    Object.values(state).sort((left, right) => right.createdAt - left.createdAt)
  );

  const makeHandleClickDeleteButton = (cardId: CardModel["id"]) => () => {
    if (confirm("정말 카드를 삭제하시겠습니까?")) {
      cardListDispatch(cardListActions.deleteCard({ id: cardId }));
    }
  };

  useEffect(() => {
    cardListDispatch(cardListActions.getCardList());
  }, []);

  return (
    <>
      <Styled.Header>보유카드</Styled.Header>
      <main>
        <Styled.UL>
          {cardList.map((card) => (
            <li key={card.id}>
              <Card
                size="SMALL"
                cardNumber={card.cardNumber}
                cardType={card.cardType}
                userName={card.cardUserName}
                expiration={card.cardExpiration}
              />
              <Styled.CardName>{card.cardName}</Styled.CardName>
              <Styled.DeleteButton onClick={makeHandleClickDeleteButton(card.id)}>
                <MdCancel />
              </Styled.DeleteButton>
            </li>
          ))}
          <li>
            <Styled.AddCardButton to={PATH.CARD_REGISTER}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.30372 7.18848H15.251V9.75195H9.30372V16.4902H6.57911V9.75195H0.631842V7.18848H6.57911V0.962891H9.30372V7.18848Z"
                  fill="#575757"
                />
              </svg>
            </Styled.AddCardButton>
          </li>
        </Styled.UL>
      </main>
    </>
  );
};

export default CardListPage;
