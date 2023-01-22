import { useContext } from "react";
import { MyCardsContext } from "../MyCardsProvider";

export default function useMyCardsContext() {
  return useContext(MyCardsContext);
}
