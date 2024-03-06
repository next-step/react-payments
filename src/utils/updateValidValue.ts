import {Validation} from './Validation';

type UpdateValidValueProps = {
	limit: number;
	setter: (value: string) => void;
	value: string;
	isMonth: boolean;
	isNumber: boolean;
};

export default function updateValidValue({
	limit,
	setter,
	value,
	isMonth,
	isNumber,
}: UpdateValidValueProps) {
	const validation = new Validation();

	let isValid = true;

	if (isNumber && !validation.isValidNumber(limit, value)) {
		isValid = false;
	}

	if (!validation.isValidLength(limit, value)) {
		isValid = false;
	}

	if (isMonth && !validation.isValidMonth(value)) {
		isValid = false;
	}

	if (isValid || value === '') {
		setter(value);
	}
}
