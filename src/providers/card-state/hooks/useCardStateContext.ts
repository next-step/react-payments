import { useContext } from "react";
import { CardStateContext } from "../CardStateProvider";

export default function useCardStateContext() {
  return useContext(CardStateContext);
}
