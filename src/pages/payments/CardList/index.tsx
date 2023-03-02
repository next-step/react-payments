import { Fragment } from "react";
import { CardListType } from "types/payments";
import Card from "components/common/Card";
import {
  usePaymentsDispatch,
  usePaymentsState,
} from "pages/payments/modules/payments/PaymentsContext";
import { CLEAR_CARD_INFO } from "pages/payments/modules/payments/PaymentsActionType";
import { useNavigate } from "react-router";
import { STEP } from "constants/Payments";

const CardList = () => {
  const { cardList } = usePaymentsState();
  const dispatch = usePaymentsDispatch();
  const navigation = useNavigate();

  const handleCardAddClick = () => {
    dispatch({ type: CLEAR_CARD_INFO });
    navigation(STEP.REGISTER_CARD);
  };

  return (
    <>
      <h2>카드 목록</h2>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">보유 카드</h2>
          </div>

          {cardList.map((card: CardListType, index) => {
            return (
              <Fragment key={index}>
                <Card input={card} backgroundColor={card?.backgroundColor} />
                <span className="card-nickname">{card?.nickname}</span>
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
