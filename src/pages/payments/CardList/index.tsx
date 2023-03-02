import { Fragment } from "react";
import { CardListType } from "types/payments";
import Card from "components/common/Card";
import {
  usePaymentsDispatch,
  usePaymentsState,
} from "pages/payments/modules/payments/PaymentsContext";
import { useNavigate } from "react-router";
import {
  DELETE_CARD,
  SelectedCardInfo,
  SET_SELECTED_CARD,
} from "pages/payments/modules/payments/PaymentsActionType";
import { STEP } from "constants/Payments";
import Button from "components/common/Button";

const CardList = () => {
  const { cardList } = usePaymentsState();
  const dispatch = usePaymentsDispatch();
  const navigation = useNavigate();

  const handleCardClick = (selectedCard: SelectedCardInfo) => {
    dispatch({ type: SET_SELECTED_CARD, selectedCard });
    navigation(STEP.ADD_CARD_NICKNAME);
  };

  const handleCardDeleteClick = (selectedCard: SelectedCardInfo) =>
    dispatch({ type: DELETE_CARD, id: selectedCard?.id });

  const handleCardAddClick = () => navigation(STEP.REGISTER_CARD);

  return (
    <>
      <h2>카드 목록</h2>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">보유 카드</h2>
          </div>
          {cardList.map((card: CardListType) => {
            return (
              <Fragment key={card.id}>
                <Card
                  input={card}
                  backgroundColor={card.backgroundColor}
                  onClick={() => handleCardClick(card)}
                />
                <div className="flex-center w-208">
                  <span className="card-nickname">{card.nickname}</span>
                  <Button
                    className="btn-delete"
                    label="카드 삭제"
                    onClick={() => handleCardDeleteClick(card)}
                  />
                </div>
              </Fragment>
            );
          })}
          <Card onClick={handleCardAddClick} />
        </div>
      </div>
    </>
  );
};

export default CardList;
