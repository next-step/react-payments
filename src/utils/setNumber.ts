import {Validation} from './Validation';

export default function setNumber(
	limit: number,
	setter: (value: string) => void,
	value: string,
	isMonth: boolean,
) {
	const validation = new Validation();

	let isValid = true;

	if (!validation.isValidNubmer(limit, value)) {
		isValid = false;
	}

	if (!validation.isValidLength(limit, value)) {
		isValid = false;
	}

	if (isMonth && !validation.isValidMonth(value)) {
		isValid = false;
	}

	if (isValid) {
		setter(value);
	}
}
