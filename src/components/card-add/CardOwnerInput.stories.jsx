import { useState } from "react";
import "../../../styles/index.css";
import CardOwnerNameInput from "./CardOwnerInput";

export default {
  title: "card-add/CardOwnerInput",
  component: Basic,
};

export function Basic(args) {
  const [cardOwnerName, setCardOwnerName] = useState("");

  return (
    <CardOwnerNameInput
      cardOwnerName={cardOwnerName}
      setCardOwnerName={setCardOwnerName}
    />
  );
}
