import { ChangeEvent, PropsWithChildren, useRef, useState } from "react";
import PaymentsContext from "./context";

export const PaymentsProvider = ({ children }: PropsWithChildren) => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const nextElement = useRef<HTMLInputElement[]>([]);

  const autoFocus = (updatedCardNumbers: string[], index: number) => {
    if (updatedCardNumbers[index].length === 4) {
      if (nextElement.current[index]) {
        nextElement.current[index].focus();
      }
    }
  };

  const setCardNumberByIndex =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const updatedCardNumbers = [...cardNumbers];
      const { value } = e.target as HTMLInputElement;

      if (Number.isNaN(+value)) {
        alert("카드번호는 숫자만 입력해주세요!");
        return;
      }

      updatedCardNumbers[index] = value;
      autoFocus(updatedCardNumbers, index);

      // 이부분만
      setCardNumbers(updatedCardNumbers);
    };

  const value = { cardNumbers, setCardNumberByIndex };

  return <PaymentsContext.Provider value={value}>{children}</PaymentsContext.Provider>;
};
