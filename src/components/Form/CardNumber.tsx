import { useEffect, useState } from "react";
import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

function CardNumber({ onCardNumberChange }: CardNumberProps) {
  const [cardNumbers, setCardNumbers] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (cardNumbers.some((cardNumber) => cardNumber)) {
      onCardNumberChange(cardNumbers);
    }
  }, [cardNumbers, onCardNumberChange]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    order: number
  ) => {
    let newArr = [...cardNumbers];
    newArr[order] = Number(event.currentTarget.value);
    setCardNumbers(newArr);
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
