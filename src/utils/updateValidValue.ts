import { isValidNumber, isValidLength, isValidMonth } from './Validation';

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
  let isValid = true;

  if (isNumber && !isValidNumber(limit, value)) {
    isValid = false;
  }

  if (!isValidLength(limit, value)) {
    isValid = false;
  }

  if (isMonth && !isValidMonth(value)) {
    isValid = false;
  }

  if (isValid || value === '') {
    setter(value);
  }
}
