export class Validation {
	isValidNumber(limit: number, value: string) {
		const numberRegex = new RegExp(`^(?:[0-9]{1,${limit}})$`);

		return numberRegex.test(value);
	}

	isValidLength(limit: number, value: string) {
		return value.length <= limit;
	}

	isValidMonth(value: string) {
		return Number(value) >= 1 && Number(value) <= 12;
	}
}
