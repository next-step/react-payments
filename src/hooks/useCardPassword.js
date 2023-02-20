import { useState } from "react";

export default function useCardPassword() {
  const [password, setPassword] = useState({num0:"", num1:"", num2:"", num3:""});

  function isNumber(value) {
    return !isNaN(Number(value));
  }

  function isValidPassword(value) {
    if(isNumber(value)) return true;
    return false;
  }

  function handlePassword(event) {
    const { name, value } = event.target;
    if (!isValidPassword(value)) {
      alert("숫자만 입력 가능합니다");
      return false;
    }
    setPassword({...password, [name]: value });
  }

  return [password, handlePassword];
}
