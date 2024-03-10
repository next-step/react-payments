import type { Context } from "react";
import { useContext } from "react";

const useContextHook = <T>(context: Context<T>, contextName: string) => {
	const currentContext = useContext(context);

	if (!currentContext) {
		throw new Error(
			`use${contextName}는 ${contextName} 내부에서만 사용 가능합니다.`
		);
	}

	return currentContext;
};

export default useContextHook;
