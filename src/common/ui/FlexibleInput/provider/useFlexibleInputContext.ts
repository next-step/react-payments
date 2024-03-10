import { FlexibleInputContext } from "./FlexibleInputProvider";
import useContextHook from "@/common/hooks/useContextHook";

const useFlexibleInputContext = () => {
	return useContextHook(FlexibleInputContext, "FlexibleInputContext");
};

export default useFlexibleInputContext;
