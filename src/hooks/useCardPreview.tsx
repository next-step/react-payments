import { useContext, useState, useEffect } from "react";
import { CardContext } from "../contexts/PaymentsCardContext";

export const useCardPreview = () => {
  const { cardNumber, ownerName, expirationDate } = useContext(CardContext);

  const [formattedExpirationDate, setFormattedExpirationDate] = useState(
    expirationDate.replace(/^(\d{2})(\d{2})$/, "$1 / $2") || "MM/YY"
  );

  const [formattedOwnerName, setFormattedOwnerName] = useState(
    ownerName.length > 10 ? ownerName.slice(0, 10) : ownerName || "NAME"
  );

  const [maskedCardNumber, setMaskedCardNumber] = useState(
    cardNumber.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1-$2-****-****")
  );

  useEffect(() => {
    setFormattedExpirationDate(
      expirationDate.replace(/^(\d{2})(\d{2})$/, "$1 / $2") || "MM/YY"
    );
  }, [expirationDate]);

  useEffect(() => {
    setFormattedOwnerName(
      ownerName.length > 15 ? ownerName.slice(0, 15) : ownerName || "NAME"
    );
  }, [ownerName]);

  useEffect(() => {
    setMaskedCardNumber(
      cardNumber.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1-$2-****-****")
    );
  }, [cardNumber]);

  return { maskedCardNumber, formattedOwnerName, formattedExpirationDate };
};
