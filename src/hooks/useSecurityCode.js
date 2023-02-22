import { useState } from "react";

import { isNumber } from "../utils/card"
import { MESSAGE } from "../constants/card";

export default function useSecurityCode() {
  const [securityCode, setSecurityCode] = useState("");

  function handleSecurityCode(event) {
    const { value } = event.target;
    if (!isNumber(value)) {
      alert(MESSAGE.ALERT_NUMBER);
      return;
    }
    setSecurityCode(value);
  }

  return [securityCode, handleSecurityCode];
}
