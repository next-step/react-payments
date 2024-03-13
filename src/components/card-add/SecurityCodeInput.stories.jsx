import { useState } from "react";
import "../../../styles/index.css";
import SecurityCodeInput from "./SecurityCodeInput";

export default {
  title: "card-add/SecurityCodeInput",
  component: Basic,
};

export function Basic(args) {
  const [securityCode, setSecurityCode] = useState("");

  return (
    <SecurityCodeInput
      securityCode={securityCode}
      setSecurityCode={setSecurityCode}
    />
  );
}
