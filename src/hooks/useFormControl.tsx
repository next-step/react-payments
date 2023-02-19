import { useState } from "react";

type colorType = "red" | "blue" | "green" | "pink" | "purple" | "cyon" | "yellow" | "orange" | "empty";
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

type cardInfoType = {
  company: companyType;
  color: colorType;
};

export const useFormControl = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState({
    month: "MM",
    year: "YY",
  });
  const [ownerName, setOwnerName] = useState<string>("Name");
  const [cardInfo, setCardInfo] = useState<cardInfoType>({
    company: "",
    color: "empty",
  });

  return {
    setCardNumber,
    cardNumber,
    expirationDate,
    setExpirationDate,
    ownerName,
    setOwnerName,
    cardInfo,
    setCardInfo,
  };
};

export default useFormControl;
