import { useState, useRef } from "react";
import { remainOnlyNumber } from "../../utils/format";
import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

const CARD_MAX_LENGTH = 4; // 카드에 들어가는 최대 길이
const PASSWORD_TYPE_START_INDEX = 2; // 패스워드 타입 시작 인덱스

export type CardNumbers = {
  0: string;
  1: string;
  2: string;
  3: string;
};

function CardNumber({ onCardNumberChange }: CardNumberProps) {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const itemsRef = useRef<HTMLInputElement[]>([]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: number
  ) => {
    event.currentTarget.value = remainOnlyNumber(event.currentTarget.value);

    const numbers: CardNumbers = {
      ...cardNumbers,
      [type]: event.currentTarget.value,
    };

    const isMaxLength = event.currentTarget.value.length === CARD_MAX_LENGTH;
    const isLastCardNumberIndex = type === 3;

    if (isMaxLength && !isLastCardNumberIndex) {
      itemsRef.current[type + 1].focus();
    }

    setCardNumbers(numbers);
    onCardNumberChange(numbers);
  };

  return (
    <InputContainer label="카드 번호">
      <InputBox>
        {Object.keys(cardNumbers).map((cardNumber, index) => (
          <Input
            onChange={(event) => onChange(event, index)}
            maxLength={CARD_MAX_LENGTH}
            name={`card-${index}`}
            key={`card-${index}`}
            type={index < PASSWORD_TYPE_START_INDEX ? "text" : "password"}
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
