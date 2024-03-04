import "../../../styles/index.css";
import {
  FIRST_NUMBER,
  FOURTH_NUMBER,
  SECOND_NUMBER,
  THIRD_NUMBER,
} from "../../constants/cardNumber";
import CardNumberInput from "./CardNumberInput";
import { useState } from "react";

export default {
  title: "card-add/CardNumberInput",
  component: Basic,
};

export function Basic(args) {
  const [cardNumber, setCardNumber] = useState({
    [FIRST_NUMBER]: "",
    [SECOND_NUMBER]: "",
    [THIRD_NUMBER]: "",
    [FOURTH_NUMBER]: "",
  });

  return (
    <CardNumberInput
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
      {...args}
    />
  );
}
