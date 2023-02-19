import { useEffect, useState, useRef } from "react";
import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

function CardNumber({ onCardNumberChange }: CardNumberProps) {
  const [cardNumbers, setCardNumbers] = useState([0, 0, 0, 0]);

  const itemsRef = useRef<any>([]);

  useEffect(() => {
    onCardNumberChange(cardNumbers);
    console.log(itemsRef.current);
  }, [cardNumbers, onCardNumberChange]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    order: number
  ) => {
    event.currentTarget.value = event.currentTarget.value.replace(
      /[^0-9]/g,
      ""
    );

    let newArr = [...cardNumbers];
    newArr[order] = Number(event.currentTarget.value);

    if (String(newArr[order]).length > 3) {
      if (order < 3) {
        itemsRef.current[order + 1].focus();
      }
    }

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
            type={index < 2 ? "text" : "password"}
            forwardRef={(el: HTMLInputElement) =>
              (itemsRef.current[index] = el)
            }
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
