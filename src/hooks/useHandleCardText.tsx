import { useState } from "react";

import { ColorType, CompanyType } from "types";

export const useHandleCardText = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expirationMonth, setExpriationMonth] = useState<string>("MM");
  const [expirationYear, setExpriationYear] = useState<string>("YY");

  const [color, setColor] = useState<ColorType>("");
  const [company, setCompany] = useState<CompanyType>("");
  const [ownerName, setOwnerName] = useState<string>("Name");
  const [securityCode, setSecurityCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return {
    setCardNumber,
    cardNumber,
    expirationMonth,
    expirationYear,
    ownerName,
    setOwnerName,
    color,
    setColor,
    company,
    setCompany,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
    setExpriationMonth,
    setExpriationYear,
  };
};

export default useHandleCardText;
