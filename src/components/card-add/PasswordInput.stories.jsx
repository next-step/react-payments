import { useState } from "react";
import "../../../styles/index.css";
import { FIRST_NUMBER, SECOND_NUMBER } from "../../constants/cardNumber";
import PasswordInput from "./PasswordInput";

export default {
  title: "card-add/PasswordInput",
  component: Basic,
};

export function Basic(args) {
  const [password, setPassword] = useState({
    [FIRST_NUMBER]: "",
    [SECOND_NUMBER]: "",
  });

  return <PasswordInput password={password} setPassword={setPassword} />;
}
