export const convertObjectValuesToString = (
	obj: Record<string, string>,
	separator: string = " "
): string => {
	return Object.values(obj).join(separator);
};
