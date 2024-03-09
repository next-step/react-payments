import { ValidArray } from "./models";

export const extractNonEmptyArrayKeys = <T extends object>(
	obj: T
): ValidArray<keyof T> => {
	const keys = Object.keys(obj) as Array<keyof T>;
	if (keys.length === 0) {
		throw new Error("keys is empty");
	}
	return keys as unknown as ValidArray<keyof T>;
};
