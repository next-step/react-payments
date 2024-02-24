export class Validation {
	isValidNubmer(value: string) {
		const numberRegex = /^(?:[0-9]{1,4})$/;

		return numberRegex.test(value);
	}

	isValidLength(limit: number, value: string) {
		return value.length <= limit;
	}
}
