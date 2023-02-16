import { useEffect, useState } from "react";
import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

function CardNumber({ onCardNumberChange }: CardNumberProps) {
  const [cardNumbers, setCardNumbers] = useState([0, 0, 0, 0]);
  const hasCardNumber = cardNumbers.some((cardNumber) => cardNumber);
  const cardNumber = hasCardNumber
    ? `${cardNumbers[0]}-${cardNumbers[1]}-${cardNumbers[2]}-${cardNumbers[3]}`
    : "";

  useEffect(() => {
    onCardNumberChange(cardNumber);
  }, [onCardNumberChange, cardNumber]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    order: number
  ) => {
    const number = Number(event.currentTarget.value);
    switch (order) {
      case 0:
        setCardNumbers((cardNumbers) =>
          cardNumbers.map((cardNumber, idx) =>
            idx === 0 ? Number(number) : cardNumber
          )
        );
        break;
      case 1:
        setCardNumbers((cardNumbers) =>
          cardNumbers.map((cardNumber, idx) =>
            idx === 1 ? Number(number) : cardNumber
          )
        );
        break;
      case 2:
        setCardNumbers((cardNumbers) =>
          cardNumbers.map((cardNumber, idx) =>
            idx === 2 ? Number(number) : cardNumber
          )
        );
        break;
      case 3:
        setCardNumbers((cardNumbers) =>
          cardNumbers.map((cardNumber, idx) =>
            idx === 3 ? Number(number) : cardNumber
          )
        );
        break;
    }
  };

  return (
    <InputContainer label="카드 번호">
      <InputBox>
        <Input onChange={(event) => onChange(event, 0)} maxLength={4}></Input>
        <Input onChange={(event) => onChange(event, 1)} maxLength={4}></Input>
        <Input
          type="password"
          onChange={(event) => onChange(event, 2)}
          maxLength={4}
        ></Input>
        <Input
          type="password"
          onChange={(event) => onChange(event, 3)}
          maxLength={4}
        ></Input>
      </InputBox>
    </InputContainer>
  );
}

type CardNumberProps = {
  onCardNumberChange: Function;
};

export default CardNumber;
