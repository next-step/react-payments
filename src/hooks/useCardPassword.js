import { useState } from "react";

import { isNumber } from "../utils/card";
import { MESSAGE } from "../constants/card";

export default function useCardPassword() {
  const [password, setPassword] = useState({num0:"", num1:"", num2:"", num3:""});

  function handlePassword(event) {
    const { name, value } = event.target;
    if (!isNumber(value)) {
      alert(MESSAGE.ALERT_NUMBER);
      return;
    }
    setPassword({...password, [name]: value });
  }

  return [password, handlePassword];
}
