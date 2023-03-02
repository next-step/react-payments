import styled from "styled-components";
import Card from "../../components/Card";
import Button from "../../components/Form/Button";
import { Size, CardType } from "../../types/common";
import { useHistory, useParams } from "react-router-dom";
import { initCard } from "../../constants/bank";
import useCardContext from "../../hooks/useCardContext";
import useCardsContext from "../../hooks/useCardsContext";
import { useState } from "react";
import { ROUTE } from "../../constants/route";

type Params = {
  id: string;
};

function CardList() {
  const params = useParams<Params>();

  const id = Number(params?.id);

  const { card, setCard, color, bankName, formattedCardNumber } =
    useCardContext();
  const [alias, setAlias] = useState("");
  const { setCards } = useCardsContext();
  const history = useHistory();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlias(e.currentTarget.value);
  };

  const updateCard = () => {
    const finalAlias = !!alias.trim() ? alias : bankName;

    const newCard = {
      ...card,
      cardAlias: finalAlias,
    };

    if (!id) {
      setCards((cards: CardType[]) => {
        return [newCard, ...cards];
      });

      return;
    }

    setCards((cards: CardType[]) => {
      const newCards = [...cards];
      newCards[id] = newCard;
      return newCards;
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateCard();
    setCard(initCard);
    history.push(ROUTE.LIST);
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
