import { useState } from "react";

import { isNumber } from "../utils/card"
import { MESSAGE } from "../constants/card";

export default function useCardExpiration() {
  const [expiration, setExpiration] = useState({month : "", year : ""});

  function handleExpiration(event) {
    const { name, value } = event.target;
    if (!isNumber(value)) {
      alert(MESSAGE.ALERT_NUMBER);
      return;
    }

    if (name == "month") {
      if (value > 12) {
        alert(MESSAGE.ALERT_EXP_MONTH);
        return;
      }
    } else {
      if (value > 31 || value === 0) {
        alert(MESSAGE.ALERT_EXP_YEAR);
        return;
      }
    }
    setExpiration({...expiration, [name] : value});
  }

  return [expiration, handleExpiration];
}
