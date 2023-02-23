import { useState } from "react";

import { isNumber } from "../utils/card";
import { MESSAGE } from "../constants/card";

export default function useCardNumber() {
  const [cardNumber, setCardNumber] = useState({
    num0: "",
    num1: "",
    num2: "",
    num3: "",
  });

  // TODO : error객체나 {success: boolean, errorMessage?: string} 과 같은 결과 객체를 반환
  function handleCardNumber(event) {
    const { name, value } = event.target;
    if (!isNumber(value)) {
      alert(MESSAGE.ALERT_NUMBER);
      return;
    }
    setCardNumber({ ...cardNumber, [name]: value });
  }

  return [cardNumber, handleCardNumber];
}
