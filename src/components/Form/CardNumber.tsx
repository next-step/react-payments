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
        {cardNumbers.map((cardNumber, index) => (
          <Input
            onChange={(event) => onChange(event, index)}
            maxLength={4}
            name={`card-${index}`}
            key={`card-${index}`}
          ></Input>
        ))}
      </InputBox>
    </InputContainer>
  );
}

type CardNumberProps = {
  onCardNumberChange: Function;
};

export default CardNumber;
