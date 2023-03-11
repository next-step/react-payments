import { formatCardNumber, getBankId, getBankName } from "./../utils/format";
import { DEFAULT_BANK_COLOR } from "./../constants/bank";
import { PasswordType } from "./../components/Form/Password";
import {
  CardNumbers,
  CARD_LAST_INDEX,
  CARD_MAX_LENGTH,
} from "./../components/Form/CardNumber";
import { useEffect, useMemo, useRef, useState } from "react";
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

  useEffect(() => {
    if (card.bankId) {
      setCardInfo((cardInfo: CardType) => {
        return {
          ...cardInfo,
          bankId: card.bankId,
        };
      });
    }
  }, [card.bankId]);

  const color = useMemo(() => {
    if (cardInfo.bankId) {
      return getBankColor(cardInfo.bankId);
    }
  }, [cardInfo.bankId]);

  const bankName = useMemo(() => {
    if (cardInfo.bankId) {
      return getBankName(cardInfo.bankId);
    }
  }, [cardInfo.bankId]);

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

    if (
      cardNumbers[CARD_LAST_INDEX].length === CARD_MAX_LENGTH &&
      cardInfo.bankId
    ) {
      expiredRef.current?.focus();
    }

    setCardInfo((card: CardType) => {
      return {
        ...card,
        ...cardInfo,
      };
    });
  };
  const onExpiredDateChange = (expiredDate: Date) => {
    if (expiredDate.month && expiredDate.year.length === 2) {
      userNameRef.current?.focus();
    }

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

  const expiredRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);

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
    expiredRef,
    userNameRef,
  };
}

export default useCardChange;
