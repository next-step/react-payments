import { formatCardNumber, getBankId, getBankName } from "./../utils/format";
import { DEFAULT_BANK_COLOR } from "./../constants/bank";
import { PasswordType } from "./../components/Form/Password";
import { CardNumbers } from "./../components/Form/CardNumber";
import { useEffect, useMemo, useState } from "react";
import { initCard } from "../constants/bank";
import { AnyObject, CardType } from "../types/common";
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
    if (cardInfo.bankId) {
      return getBankColor(cardInfo.bankId);
    }

    return getBankColor(card.bankId);
  }, [cardInfo.bankId, card.bankId]);

  const bankName = useMemo(() => {
    if (cardInfo.bankId) {
      return getBankName(cardInfo.bankId);
    }

    return getBankName(card.bankId);
  }, [cardInfo.bankId, card.bankId]);

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

  const setBankId = (newCardInfo: AnyObject, firstCardNumber: string) => {
    if (!firstCardNumber || firstCardNumber.length < 4) {
      return newCardInfo;
    }

    const bankId = getBankId(firstCardNumber);
    newCardInfo.bankId = bankId;
    return newCardInfo;
  };

  const onCardNumberChange = (cardNumbers: CardNumbers) => {
    const newCardInfo: AnyObject = {
      cardNumber: cardNumbers,
    };

    const cardInfo = setBankId(newCardInfo, cardNumbers[0]);

    setCardInfo((card: CardType) => {
      return {
        ...card,
        ...cardInfo,
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
    bankName,
    setCardInfo,
  };
}

export default useCardChange;
