/* eslint-disable @typescript-eslint/no-explicit-any */
export const updateNestedState = <T extends Record<string, any>>(
	prevState: T,
	path: string,
	value: any
): T => {
	const keys = path.split(".");
	const lastKey = keys.pop();
	const lastObj = keys.reduce<Record<string, any>>(
		(acc, key) => (acc[key] = acc[key] || {}),
		prevState
	);
	if (lastKey) {
		lastObj[lastKey] = value;
	}
	return { ...prevState };
};
