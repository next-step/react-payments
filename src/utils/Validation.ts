export class Validation {
	isValidNubmer(limit: number, value: string) {
		const numberRegex = new RegExp(`^(?:[0-9]{1,${limit}})$`);

		return numberRegex.test(value);
	}

	isValidLength(limit: number, value: string) {
		return value.length <= limit;
	}
}
