export type NonEmptyArray<T> = readonly [T, ...T[]];

const isNonEmptyArray = <T>(array: readonly T[]): array is NonEmptyArray<T> => {
	return array.length > 0;
};

export const extractNonEmptyArrayKeys = <T extends object>(
	obj: T
): NonEmptyArray<keyof T> => {
	const keys = Object.keys(obj) as Array<keyof T>;
	if (!isNonEmptyArray(keys)) {
		throw new Error("keys is empty");
	}
	return keys;
};
