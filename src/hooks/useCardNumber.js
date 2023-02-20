import { useState } from "react";

export default function useCardNumber() {
  const [cardNumber, setCardNumber] = useState({num0:"", num1:"", num2:"", num3:""});

  function isNumber(value) {
    return !isNaN(Number(value));
  }

  function isValidCardNumber(value) {
    if(isNumber(value)) return true;
    return false;
  }

  function handleCardNumber(event) {
    const {name, value} = event.target;
    if (!isValidCardNumber(value)) {
      alert("숫자만 입력 가능합니다");
      return false;
    }
    setCardNumber({...cardNumber, [name] : value});
  }

  return [cardNumber, handleCardNumber];
}
