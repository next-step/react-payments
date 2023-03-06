import { useContext, useState, useEffect, useMemo } from "react";
import { CardContext } from "../contexts/PaymentsCardContext";

export const useCardPreview = () => {
  const { cardNumber, ownerName, expirationDate } = useContext(CardContext);

  const cardNumberRegExp = useMemo(() => /^(\d{4})(\d{4})(\d{4})(\d{4})$/, []);
  const formattedExpirationDateRegExp = useMemo(() => /^(\d{2})(\d{2})$/, []);
  const ownerNameRegExp = useMemo(() => /[^\w\s]/gi, []);

  const [formattedExpirationDate, setFormattedExpirationDate] = useState(
    expirationDate.replace(formattedExpirationDateRegExp, "$1 / $2") || "MM/YY"
  );

  const [formattedOwnerName, setFormattedOwnerName] = useState(
    ownerName.replace(ownerNameRegExp, "").slice(0, 15) || "NAME"
  );

  const [maskedCardNumber, setMaskedCardNumber] = useState(
    cardNumber.replace(cardNumberRegExp, "$1-$2-****-****")
  );

  useEffect(() => {
    setFormattedExpirationDate(
      expirationDate.replace(formattedExpirationDateRegExp, "$1 / $2") ||
        "MM/YY"
    );
    setFormattedOwnerName(
      ownerName.replace(ownerNameRegExp, "").slice(0, 15) || "NAME"
    );
    setMaskedCardNumber(
      cardNumber.replace(cardNumberRegExp, "$1-$2-****-****")
    );
  }, [
    cardNumber,
    ownerName,
    expirationDate,
    formattedExpirationDateRegExp,
    ownerNameRegExp,
    cardNumberRegExp,
  ]);

  return { maskedCardNumber, formattedOwnerName, formattedExpirationDate };
};
