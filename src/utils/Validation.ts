export class Validation {
	isValidLength(limit: number, value: string) {
		return limit < value.length;
	}
}
