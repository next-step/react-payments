import { useContext } from "react";
import { CardContext } from "./CardProvider";

const useCardContext = () => {
	const context = useContext(CardContext);

	if (!context)
		throw new Error("useCardContext는 CardContext 내부에서만 사용 가능합니다.");
	return context;
};

export default useCardContext;
