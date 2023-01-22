import { useContext } from "react";
import { CardFormContext } from "../CardFormProvider";

export default function useCardFormContext() {
  return useContext(CardFormContext);
}
