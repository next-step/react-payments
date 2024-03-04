import { useContext } from "react";
import { FlexibleInputContext } from "./FlexibleInputProvider";

const useFlexibleInputContext = () => {
	const context = useContext(FlexibleInputContext);

	if (!context)
		throw new Error(
			"useFlexibleInputContext는 FlexibleInputContext 내부에서만 사용 가능합니다."
		);
	return context;
};

export default useFlexibleInputContext;
