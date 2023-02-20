import { useState } from "react";

export default function useCardExpiration() {
  const [expiration, setExpiration] = useState({month : "", year : ""});

  function isNumber(value) {
    return !isNaN(Number(value));
  }

  function isValidExpiration(value) {
    if(isNumber(value)) return true;
    return false;
  }

  function handleExpiration(event) {
    const { name, value } = event.target;
    if (!isValidExpiration(value)) {
      alert("숫자만 입력 가능합니다.");
      return false;
    }

    if (name == "month") {
      if (value > 12) {
        alert("만료 월은 1~12 사이 값만 입력 가능합니다.");
        return false;
      }
    } else {
      if (value > 31 || value === 0) {
        alert("만료 일은 1~31 사이 값만 입력 가능합니다.");
        return false;
      }
    }
    setExpiration({...expiration, [name] : value});
  }

  return [expiration, handleExpiration];
}
