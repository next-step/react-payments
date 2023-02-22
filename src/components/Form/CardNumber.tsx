import { useEffect, useState, useRef } from "react";
import { remainOnlyNumber } from "../../utils/format";
import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

const CARD_MAX_LENGTH = 4; // 카드에 들어가는 최대 길이
const PASSWORD_TYPE_START_INDEX = 2; // 패스워드 타입 시작 인덱스

type CardNumbers = {
  1: string;
  2: string;
  3: string;
  4: string;
};

function CardNumber({ onCardNumberChange }: CardNumberProps) {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const itemsRef = useRef<any>([]);

  useEffect(() => {
    onCardNumberChange(cardNumbers);
  }, [cardNumbers, onCardNumberChange]);

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
    const isLastCardNumberIndex = type === 4;

    if (isMaxLength && !isLastCardNumberIndex) {
      itemsRef.current[type + 1].focus();
    }

    // let newArr = [...cardNumbers];
    // newArr[order] = Number(event.currentTarget.value);

    // const isMaxLength = String(newArr[order]).length === CARD_MAX_LENGTH;
    // const isLastCardNumberIndex = order === cardNumbers.length - 1;
    // if (isMaxLength && !isLastCardNumberIndex) {
    //   itemsRef.current[order + 1].focus();
    // }

    setCardNumbers(numbers);
  };

  return (
    <div></div>
    // <InputContainer label="카드 번호">
    //   <InputBox>
    //     {Object.values(cardNumbers).map((key, index) => (
    //       <Input
    //         onChange={(event) => onChange(event, index)}
    //         maxLength={CARD_MAX_LENGTH}
    //         name={`card-${index}`}
    //         key={`card-${index}`}
    //         type={index < PASSWORD_TYPE_START_INDEX ? "text" : "password"}
    //         forwardRef={(el: HTMLInputElement) =>
    //           (itemsRef.current[index] = el)
    //         }
    //       ></Input>
    //     ))}
    //   </InputBox>
    // </InputContainer>
  );
}

type CardNumberProps = {
  onCardNumberChange: Function;
};

export default CardNumber;
