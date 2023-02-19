import { ChangeEvent, PropsWithChildren, useRef, useState } from "react";
import PaymentsContext from "./context";

const CURRENT_YEAR = Number(new Date().getFullYear().toString().slice(-2));
const MAX_DATE_LENGTH = 2;

export const PaymentsProvider = ({ children }: PropsWithChildren) => {
  const nextElement = useRef<HTMLInputElement[]>([]);
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [expirationDate, setExpirationDate] = useState<string[]>(["", ""]);
  const [cardOwnerName, setCardOwnerName] = useState<string>("");
  const [password, setPassword] = useState<string[]>(["", ""]);
  const [cvc, setCvc] = useState<string>("");

  const autoFocus = (updatedCardNumbers: string[], index: number) => {
    if (updatedCardNumbers[index].length === 4) {
      if (nextElement.current[index]) {
        nextElement.current[index].focus();
      }
    }
  };

  const handleCardNumberInput = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const updatedCardNumbers = [...cardNumbers];
      const { value } = e.target as HTMLInputElement;

      if (Number.isNaN(+value)) {
        alert("카드번호는 숫자만 입력해주세요!");
        return;
      }

      updatedCardNumbers[index] = value;
      autoFocus(updatedCardNumbers, index);
      setCardNumbers(updatedCardNumbers);
    };

  const handleExpirationDateInput = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const updatedExpirationDate = [...expirationDate];
      const { value } = e.target as HTMLInputElement;

      if (Number.isNaN(+value)) {
        alert("카드 유효기간은 숫자만 입력해주세요!");
        return;
      }

      updatedExpirationDate[index] = value;

      if (index === 0) {
        if (Number(value) > 12) {
          alert("월은 1이상 12이하 숫자여야 합니다.");
          expirationDate[index] = "";
          return;
        }
      }

      if (index === 1) {
        if (updatedExpirationDate[index].length === MAX_DATE_LENGTH) {
          if (Number(value) < CURRENT_YEAR) {
            alert("년도는 현재년도보다 적을 수 없습니다.");
            expirationDate[index] = "";
            return;
          }
        }
      }

      setExpirationDate(updatedExpirationDate);
    };

  const handleCardOwnerInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardOwnerName(value);
  };

  const handleCvcInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    if (Number.isNaN(+value)) {
      alert("보안코드는 숫자만 입력해주세요!");
      return;
    }
    setCvc(value);
  };

  const handlePasswordByInput = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const updatedPassword = [...password];
      const { value } = e.target;

      if (Number.isNaN(+value)) {
        alert("숫자만 입력해주세요.");
        return;
      }

      updatedPassword[index] = value;
      setPassword(updatedPassword);
    };

  const value = {
    cardNumbers,
    nextElement,
    expirationDate,
    cardOwnerName,
    cvc,
    password,
    handleCardNumberInput,
    handleExpirationDateInput,
    handleCardOwnerInput,
    handleCvcInput,
    handlePasswordByInput,
  };

  return (
    <PaymentsContext.Provider value={value}>
      {children}
    </PaymentsContext.Provider>
  );
};
