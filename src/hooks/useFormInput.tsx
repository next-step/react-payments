import { useState } from "react";

export const useFormInput = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState({
    month: "MM",
    year: "YY",
  });
  const [ownerName, setOwnerName] = useState("Name");

  return { setCardNumber, cardNumber, expirationDate, setExpirationDate, ownerName, setOwnerName };
};

export default useFormInput;
