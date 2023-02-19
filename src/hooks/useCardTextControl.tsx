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
  const [cardCompany, setCardCompnay] = useState<companyType>("");
  const [ownerName, setOwnerName] = useState<string>("Name");

  return {
    setCardNumber,
    cardNumber,
    expirationDate,
    setExpirationDate,
    ownerName,
    setOwnerName,
    color,
    setcolor,
    cardCompany,
    setCardCompnay,
  };
};

export default useCardTextControl;
