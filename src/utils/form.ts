import { CardInformation } from '@/types';

const renderTextDivider = ({
  formerValue,
  latterValue = '',
  divider = '-',
}: {
  formerValue: string;
  latterValue?: string;
  divider?: string;
}) => {
  if (formerValue || latterValue) return divider;

  return '';
};

const checkRequiredValues = (data: CardInformation) => {
  const REQUIRED_FORM_KEYS: (keyof CardInformation)[] = [
    'cardNumber1',
    'cardNumber2',
    'cardNumber3',
    'cardNumber4',
    'year',
    'month',
    'password1',
    'password2',
    'cvc',
  ];

  return REQUIRED_FORM_KEYS.every(key => Boolean(data[key]));
};

const expirationMonthFormatter = (month: string) => {
  const [num1, num2] = month.split('');
  if (num1 === undefined && parseInt(num1, 10) > 1) return '';
  if (num1 === '0' && num2 === '0') return num1;
  if (num1 === '1' && parseInt(num2, 10) > 2) return num1;

  return month.replace(/\D+/g, '');
};

const textOnlyFormatter = (str: string) => {
  return str.replace(/\D+/g, '');
};

export { renderTextDivider, checkRequiredValues, expirationMonthFormatter, textOnlyFormatter };
