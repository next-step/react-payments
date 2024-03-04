export const maskObjectValuesAfterIndex = (
	obj: Record<string, string>,
	maskAfter: number,
	maskWith: string = "*",
	separator: string = " "
): string => {
	const values = Object.values(obj);
	const formattedValues = values.map((value, index) =>
		index >= maskAfter ? maskWith.repeat(value.length) : value
	);
	return formattedValues.join(separator);
};
