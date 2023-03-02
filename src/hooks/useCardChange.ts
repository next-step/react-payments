import { formatCardNumber } from "./../utils/format";
import { DEFAULT_BANK_COLOR } from "./../constants/bank";
import { PasswordType } from "./../components/Form/Password";
import { CardNumbers } from "./../components/Form/CardNumber";
import { useMemo, useState } from "react";
import { initCard } from "../constants/bank";
import { CardType } from "../types/common";
import { Date } from "../components/Form/ExpiredDate";
import { getBankColor } from "../utils/format";
import useCardContext from "./useCardContext";

function useCardChange() {
  const [cardInfo, setCardInfo] = useState(initCard);
  const { card } = useCardContext();

  const isTyping =
    Object.values(cardInfo.cardNumber).some((number) => number) ||
    Object.values(cardInfo.expiredDate).some((date) => date) ||
    !!cardInfo.userName;

  const color = useMemo(() => {
    return getBankColor(card.bankId);
  }, [card.bankId]);

  const cardColor = useMemo(() => {
    if (color) {
      return color;
    }

    if (isTyping) {
      return DEFAULT_BANK_COLOR;
    }
  }, [color, isTyping]);

  const formattedCardNumber = useMemo(() => {
    return formatCardNumber(cardInfo.cardNumber);
  }, [cardInfo.cardNumber]);

  const onCardNumberChange = (cardNumbers: CardNumbers) => {
    setCardInfo((card: CardType) => {
      return {
        ...card,
        cardNumber: cardNumbers,
      };
    });
  };
  const onExpiredDateChange = (expiredDate: Date) => {
    setCardInfo((card: CardType) => {
      return {
        ...card,
        expiredDate,
      };
    });
  };
  const onUserNameChange = (userName: string) => {
    setCardInfo((card: CardType) => {
      return {
        ...card,
        userName,
      };
    });
  };
  const onCodeChange = (code: number) => {
    setCardInfo((card: CardType) => {
      return {
        ...card,
        code,
      };
    });
  };
  const onPasswordChange = (password: PasswordType): void => {
    setCardInfo((card: CardType) => {
      return {
        ...card,
        password,
      };
    });
  };

  return {
    onCardNumberChange,
    onCodeChange,
    onExpiredDateChange,
    onUserNameChange,
    onPasswordChange,
    cardInfo,
    cardColor,
    formattedCardNumber,
  };
}

export default useCardChange;
