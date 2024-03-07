export const maskStringAfterIndex = (
	str: string,
	maskAfter: number,
	maskWith: string = "*",
	separator: string = " "
): string => {
	const parts = str.split(separator);
	const maskedParts = parts.map((part, index) =>
		index >= maskAfter ? maskWith.repeat(part.length) : part
	);
	return maskedParts.join(separator);
};
