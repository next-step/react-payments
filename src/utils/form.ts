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

export { renderTextDivider, checkRequiredValues };
