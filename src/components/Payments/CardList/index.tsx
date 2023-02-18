import { Dispatch, Fragment, SetStateAction } from "react";
import { CardListType } from "../../../types/payments";
import Card from "../../common/Card";

interface CardListProps {
  cardList: CardListType[];
  setStep: Dispatch<SetStateAction<number>>;
}

const CardList = ({ cardList, setStep }: CardListProps) => {
  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>

        {cardList.map((card: CardListType, index) => {
          return (
            <Fragment key={index}>
              <Card input={card} />
              <span className="card-nickname">{card?.nickname}</span>
            </Fragment>
          );
        })}

        <Card onClick={() => setStep(1)} />
      </div>
    </div>
  );
};

export default CardList;
