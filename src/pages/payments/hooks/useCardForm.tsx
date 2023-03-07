import React, { useId, useRef, useState } from "react";
import { CARD_INFO, STEP, VALIDATION_LIST } from "constants/Payments";
import {
  formatNumber,
  monthConverter,
  validateInput,
} from "pages/payments/utils";
import {
  usePaymentsDispatch,
  usePaymentsState,
} from "pages/payments/modules/payments/PaymentsContext";
import {
  ADD_CARD_INFO,
  NewCardInfo,
} from "pages/payments/modules/payments/PaymentsActionType";
import { useNavigate } from "react-router";

export const useCardForm = () => {
  const navigate = useNavigate();

  const { newCardInfo, selectedCard } = usePaymentsState();
  const dispatch = usePaymentsDispatch();

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState(selectedCard?.nickname || "");
  const id = useId();
  const numberInputRef = useRef<HTMLInputElement>(null);
  const cvcInputRef = useRef<HTMLInputElement>(null);
  const expiryInputRef = useRef<HTMLInputElement>(null);
  const firstPasswordInputRef = useRef<HTMLInputElement>(null);
  const secondPasswordInputRef = useRef<HTMLInputElement>(null);

  const getReference = (id: string) => {
    switch (id) {
      case CARD_INFO.NUMBER:
        return numberInputRef;
      case CARD_INFO.EXPIRY:
        return expiryInputRef;
      case CARD_INFO.CVC:
        return cvcInputRef;
      case CARD_INFO.FIRST_PASSWORD:
        return firstPasswordInputRef;
      case CARD_INFO.SECOND_PASSWORD:
        return secondPasswordInputRef;
      default:
        throw new Error("해당하지 않는 reference 입니다.");
    }
  };

  const formatInput = (
    input: string,
    id: typeof CARD_INFO.NUMBER | typeof CARD_INFO.EXPIRY,
    maxLength: number
  ): string => {
    if (input.length >= maxLength) {
      return input;
    }
    switch (id) {
      case CARD_INFO.NUMBER:
        return formatNumber({ input, nth: 5 });
      case CARD_INFO.EXPIRY:
        return formatNumber({
          input: monthConverter(input),
          nth: 3,
          formatter: "/",
        });
      default:
        return input;
    }
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, maxLength } = e.target;

    const ref = getReference(id);
    if (!ref?.current?.value) {
      return;
    }

    ref.current.value = validateInput({
      ref,
      id,
      validationList: VALIDATION_LIST,
    });

    if (
      ref.current.value &&
      (id === CARD_INFO.NUMBER || id === CARD_INFO.EXPIRY)
    ) {
      ref.current.value = formatInput(ref.current.value, id, maxLength);
    }
  };

  const handleCompanyModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // handleCardTypeClick(e);
    const event = e.target as HTMLDivElement;
    const { id: title, style } = event;

    const newCardInfoWithType: NewCardInfo = {
      ...newCardInfo,
      title,
      backgroundColor: style.backgroundColor,
    };

    dispatch({ type: ADD_CARD_INFO, newCardInfo: newCardInfoWithType });

    navigate(STEP.REGISTER_CARD_COMPLETED);
  };

  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);
  const handleCardNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(e.currentTarget.value);

  const handleInputSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCardInfo: NewCardInfo = {
      id,
      name,
      number: numberInputRef.current?.value,
      cvc: cvcInputRef.current?.value,
      expiry: expiryInputRef.current?.value,
      firstPassword: firstPasswordInputRef.current?.value,
      secondPassword: secondPasswordInputRef.current?.value,
    };

    dispatch({ type: ADD_CARD_INFO, newCardInfo });
  };

  return {
    name,
    nickname,
    ref: {
      numberInputRef,
      cvcInputRef,
      expiryInputRef,
      firstPasswordInputRef,
      secondPasswordInputRef,
    },
    handleCardInputChange,
    handleCompanyModalClick,
    handleCardNameChange,
    handleCardNicknameChange,
    handleInputSubmit,
  };
};
