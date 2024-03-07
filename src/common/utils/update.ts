/* eslint-disable @typescript-eslint/no-explicit-any */
export const updateNestedState = <T extends Record<string, any>>(
	prevState: T,
	path: string,
	newValue: any
): T => {
	const keys = path.split(".");
	if (keys.length === 0) {
		throw new Error("path가 제공되지 않았습니다.");
	}

	const updateRecursively = (
		state: Record<string, any>,
		keyPath: string[]
	): Record<string, any> => {
		const [currentKey, ...restKeys] = keyPath;

		if (!currentKey) {
			throw new Error("path가 유효하지 않습니다: 빈 key가 있습니다.");
		}

		if (restKeys.length === 0) {
			return { ...state, [currentKey]: newValue };
		}

		if (state[currentKey] !== null && typeof state[currentKey] !== "object") {
			throw new Error(
				`path가 유효하지 않습니다: '${currentKey}'에 해당하는 값이 객체가 아닙니다.`
			);
		}

		return {
			...state,
			[currentKey]: updateRecursively(state[currentKey] ?? {}, restKeys)
		};
	};

	return updateRecursively(prevState, keys) as T;
};
