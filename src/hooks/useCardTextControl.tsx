import { useState } from "react";

type colorType = "red" | "blue" | "green" | "pink" | "purple" | "cyon" | "yellow" | "orange" | "";
type companyType =
  | "하나카드"
  | "국민카드"
  | "신한카드"
  | "클린카드"
  | "토스카드"
  | "네이버카드"
  | "카카오카드"
  | "오렌지카드"
  | "";

export const useCardTextControl = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState({
    month: "MM",
    year: "YY",
  });
  const [color, setcolor] = useState<colorType>("");
  const [company, setcompany] = useState<companyType>("");
  const [ownerName, setOwnerName] = useState<string>("Name");
  const [securityCode, setSecurityCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return {
    setCardNumber,
    cardNumber,
    expirationDate,
    setExpirationDate,
    ownerName,
    setOwnerName,
    color,
    setcolor,
    company,
    setcompany,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
  };
};

export default useCardTextControl;
