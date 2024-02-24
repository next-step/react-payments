import {Validation} from './Validation';

export default function setNumber(
	limit: number,
	setter: (value: string) => void,
	value: string,
) {
	const validation = new Validation();

	let isValid = true;

	if (!validation.isValidNubmer(value)) {
		isValid = false;
	}

	if (!validation.isValidLength(limit, value)) {
		isValid = false;
	}

	if (isValid) {
		setter(value);
	}
}
