import { KeyboardEvent, useRef, useState } from "react";

import styles from "./CardNumberInput.module.css";
import { CardNumber } from "../../types";
import { isNumberFromString } from "../../../../../utils";
import LabelBox from "../../../../../components/LabelBox/LabelBox";
import Box from "../../../../../components/Box/Box";
import LimitedLengthInput from "../../../../../components/LimitedLengthInput/LimitedLengthInput";
import useChainFocusInput from "../../../../../hooks/useChainFocus";
import { mergeRefs } from "react-merge-refs";

interface CardNumberInputProps {
  onChange?: (value: CardNumber) => void;
  value?: CardNumber;
}

function isFullFilledText(text: string, length: number) {
  return text.length >= length;
}

export default function CardNumberInput({
  onChange,
  value = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
  },
}: CardNumberInputProps) {
  const { targetRef, focusRef } = useChainFocusInput<HTMLDivElement>();
  const firstNumberInputRef = useRef<HTMLInputElement>(null);
  const secondNumberInputRef = useRef<HTMLInputElement>(null);
  const thirdNumberInputRef = useRef<HTMLInputElement>(null);
  const fourthNumberInputRef = useRef<HTMLInputElement>(null);
  const [cardNumber, setCardNumber] = useState<CardNumber>(value);

  const focus = {
    firstNumber: () => firstNumberInputRef.current?.focus(),
    secondNumber: () => secondNumberInputRef.current?.focus(),
    thirdNumber: () => thirdNumberInputRef.current?.focus(),
    fourthNumber: () => fourthNumberInputRef.current?.focus(),
  };

  function fillCardNumber(key: keyof CardNumber) {
    return function changeInputValue(value: string) {
      const checkedValue = isNumberFromString(value) ? value : "";
      onChange &&
        onChange({
          ...cardNumber,
          [key]: checkedValue,
        });
      setCardNumber((prev) => ({ ...prev, [key]: checkedValue }));
    };
  }

  function backSpaceEventHandler(key: keyof CardNumber) {
    return function moveToPreviousInput(
      event: KeyboardEvent<HTMLInputElement>
    ) {
      const input = (event.currentTarget as HTMLInputElement).value as string;
      if (event.key === "Backspace" && input.length === 0) {
        focus[key]();
      }
    };
  }

  return (
    <LabelBox description="카드 번호">
      <Box
        ref={targetRef}
        height="45px"
        width="100%"
        backgroundColor="#ECEBF1"
        contentPosition="centerMiddle"
      >
        <Box contentPosition="centerMiddle">
          <LimitedLengthInput
            ref={mergeRefs([firstNumberInputRef, focusRef])}
            title="first number of card"
            onChange={fillCardNumber("firstNumber")}
            value={cardNumber.firstNumber}
            type="text"
            colorTheme="primary"
            maxLength={4}
            textAlign="center"
          />
          {cardNumber.firstNumber &&
            isFullFilledText(cardNumber.firstNumber, 4) && (
              <>
                <div className={styles.hyphen}>-</div>
                <LimitedLengthInput
                  ref={secondNumberInputRef}
                  title="second number of card"
                  isAbledFocusOnMount
                  onChange={fillCardNumber("secondNumber")}
                  onKeyDown={backSpaceEventHandler("firstNumber")}
                  value={cardNumber.secondNumber}
                  type="text"
                  colorTheme="primary"
                  maxLength={4}
                  textAlign="center"
                />
              </>
            )}
          {cardNumber.secondNumber &&
            isFullFilledText(cardNumber.secondNumber, 4) && (
              <>
                <div className={styles.hyphen}>-</div>
                <LimitedLengthInput
                  ref={thirdNumberInputRef}
                  title="third number of card"
                  isAbledFocusOnMount
                  onChange={fillCardNumber("thirdNumber")}
                  onKeyDown={backSpaceEventHandler("secondNumber")}
                  value={cardNumber.thirdNumber}
                  type="password"
                  colorTheme="primary"
                  maxLength={4}
                  textAlign="center"
                />
              </>
            )}
          {cardNumber.thirdNumber &&
            isFullFilledText(cardNumber.thirdNumber, 4) && (
              <>
                <div className={styles.hyphen}>-</div>
                <LimitedLengthInput
                  ref={fourthNumberInputRef}
                  title="fourth number of card"
                  isAbledFocusOnMount
                  onChange={fillCardNumber("fourthNumber")}
                  onKeyDown={backSpaceEventHandler("thirdNumber")}
                  value={cardNumber.fourthNumber}
                  type="password"
                  colorTheme="primary"
                  maxLength={4}
                  textAlign="center"
                />
              </>
            )}
        </Box>
      </Box>
    </LabelBox>
  );
}
