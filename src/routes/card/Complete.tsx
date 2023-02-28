import styled from "styled-components";
import Card from "../../components/Card";
import Button from "../../components/Form/Button";
import { CardContext } from "../../components/CardProvider";
import { useContext, useMemo, useState } from "react";
import { BANKS } from "../../constants/bank";
import { Size, CardType } from "../../types/common";
import { useHistory, useParams } from "react-router-dom";
import { CardsContext } from "../../components/CardsProvider";

const formatNumber = (number: string) => {
  return number.replaceAll(/[0-9]/g, "*");
};

type Params = {
  id: string;
};

function CardList() {
  const cardContext = useContext(CardContext);
  const cardsContext = useContext(CardsContext);
  const params = useParams<Params>();

  const id = Number(params?.id);

  if (!cardContext || !cardsContext) {
    alert("context 누락");
    throw Error("context 필수값 누락");
  }

  const { card, setCard } = cardContext;
  const [alias, setAlias] = useState("");
  const { setCards } = cardsContext;
  const history = useHistory();

  const formattedCardNumber = useMemo(() => {
    const hasCardNumber = Object.values(card.cardNumber).some(
      (cardNumber) => cardNumber
    );
    return hasCardNumber
      ? `${card.cardNumber[0]}-${card.cardNumber[1]}-${formatNumber(
          card.cardNumber[2]
        )}-${formatNumber(card.cardNumber[3])}`
      : "";
  }, [card.cardNumber]);
  const color = useMemo(() => {
    if (card.bankId) {
      const selectedBank = BANKS.find((bank) => bank.ID === card.bankId);
      return selectedBank ? selectedBank.COLOR : "";
    }
  }, [card.bankId]);
  const bankName = useMemo(() => {
    if (card.bankId) {
      const selectedBank = BANKS.find((bank) => bank.ID === card.bankId);
      return selectedBank ? selectedBank.NAME : "";
    }
    return "";
  }, [card.bankId]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlias(e.currentTarget.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalAlias = !!alias.trim() ? alias : bankName;

    const newCard = {
      ...card,
      cardAlias: finalAlias,
    };

    if (id) {
      setCards((cards: CardType[]) => {
        const newCards = [...cards];
        newCards[id] = newCard;
        return newCards;
      });
    } else {
      setCards((cards: CardType[]) => {
        return [newCard, ...cards];
      });
    }

    setCard({});
    history.push("/list");
  };

  return (
    <Wrapper>
      <TextWrapper>
        <Title>카드 등록이 완료되었습니다.</Title>
      </TextWrapper>
      <form onSubmit={submitHandler}>
        <Card
          cardNumber={formattedCardNumber}
          expiredDate={card.expiredDate}
          userName={card.userName}
          color={color}
          bankName={bankName}
          size={Size.Big}
        />
        <InputWrapper>
          <Input
            onChange={onChange}
            placeholder="카드의 별칭을 입력해주세요."
            maxLength={10}
          />
        </InputWrapper>
        <Space />
        <Button />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #383838;
  margin-bottom: 2.5rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;

const Input = styled.input`
  text-align: center;
  border: none;
  background: none;
  outline: none;
  margin: 16px 0;
  padding: 4px 0;
  border-bottom: 1px solid #383838;
  font-size: 16px;
  width: 75%;
`;

const Space = styled.div`
  margin-top: 11.5rem;
`;

export default CardList;
