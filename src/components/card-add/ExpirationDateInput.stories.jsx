import { useState } from "react";
import "../../../styles/index.css";
import ExpirationDateInput from "./ExpirationDateInput";
import { MONTH, YEAR } from "../../constants/expirationDate";

export default {
  title: "card-add/ExpirationDate",
  component: Basic,
};

export function Basic(args) {
  const [expirationDate, setExpirationDate] = useState({
    [MONTH]: "",
    [YEAR]: "",
  });

  return (
    <ExpirationDateInput
      expirationDate={expirationDate}
      setExpirationDate={setExpirationDate}
    />
  );
}
