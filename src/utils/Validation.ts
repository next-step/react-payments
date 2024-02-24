export class Validation {
	isValidLength(limit: number, value: string) {
		return value.length <= limit;
	}
}
