import { useState, useRef } from "react";
import { remainOnlyNumber } from "../../utils/format";
import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";
import { InvalidText } from "../InvalidText";

export const CARD_MAX_LENGTH = 4; // 카드에 들어가는 최대 길이
export const CARD_LAST_INDEX = 3; // 카드 마지막 인덱스
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
  const [invalid, setInvalid] = useState(true);

  const itemsRef = useRef<HTMLInputElement[]>([]);

  const checkCardNumberInvalid = (cardNumbers: CardNumbers) => {
    const valid = Object.values(cardNumbers).every((cardNumber) => cardNumber);
    setInvalid(!valid);
  };

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
    const isLastCardNumberIndex = type === CARD_LAST_INDEX;

    if (isMaxLength && !isLastCardNumberIndex) {
      itemsRef.current[type + 1].focus();
    }

    setCardNumbers(numbers);
    onCardNumberChange(numbers);
    checkCardNumberInvalid(numbers);
  };

  return (
    <>
      <InputContainer label="카드 번호">
        <InputBox>
          {Object.keys(cardNumbers).map((cardNumber, index) => (
            <Input
              onChange={(event) => onChange(event, index)}
              maxLength={CARD_MAX_LENGTH}
              name={`card-${index}`}
              key={`card-${index}`}
              type={index < PASSWORD_TYPE_START_INDEX ? "text" : "password"}
              ref={(el: HTMLInputElement) => (itemsRef.current[index] = el)}
            ></Input>
          ))}
        </InputBox>
        <>{invalid && <InvalidText>4자리를 모두 채워야 합니다</InvalidText>}</>
      </InputContainer>
    </>
  );
}

type CardNumberProps = {
  onCardNumberChange: Function;
};

export default CardNumber;
