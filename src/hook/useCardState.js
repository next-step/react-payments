import { useContext } from "react";
import { CardContext } from "../../providers/CardState/CardStateProvider";

export const useCardState = () => {
  const context = useContext(CardContext);

  return context;
};
