import { useState } from "react";

export default function useCardPassword() {
  // TODO : inputValue가 개별 input 태그에 들어가있음. 상위 상태와 개별 상태 구분 필요
  // TODO : disabled 선택적으로 주기
  // TODO : 배열 값 불변성 유지 - spread operator
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
