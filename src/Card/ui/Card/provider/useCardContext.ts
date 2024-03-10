import { CardContext } from "./CardProvider";
import useContextHook from "@/common/hooks/useContextHook";

const useCardContext = () => {
	return useContextHook(CardContext, "CardContext");
};

export default useCardContext;
