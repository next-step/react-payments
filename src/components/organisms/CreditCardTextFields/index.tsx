import { TextField } from '@/components/molecules';
import { TextFieldProps } from '@/components/molecules/TextField';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

interface CreditCardTextFieldProps {
  value: TextFieldProps['value'];
  onChange: TextFieldProps['onChange'];
}

function CardNumber({ value, onChange }: CreditCardTextFieldProps) {
  const MAX_LENGTH_FOR_FORMATTED_CODE = 19;

  return (
    <TextField
      name="cardNumber"
      type="text"
      value={value}
      onChange={onChange}
      label="카드 번호"
      lengthLimit={{ show: false, maxLength: MAX_LENGTH_FOR_FORMATTED_CODE }}
      inputProps={{ inputMode: 'numeric' }}
    />
  );
}

function VerificationCode({ value, onChange }: CreditCardTextFieldProps) {
  return (
    <TextField
      name="verificationCode"
      className="w-28"
      type="text"
      value={value}
      onChange={onChange}
      label="보안코드(CVC/CVV)"
      lengthLimit={{ show: false, maxLength: 3 }}
      inputProps={{ inputMode: 'numeric', type: 'password', className: 'text-center' }}
    />
  );
}

function CardPassword({ value, onChange }: CreditCardTextFieldProps) {
  return (
    <TextField
      name="cardPassword"
      className="w-28"
      type="text"
      value={value}
      onChange={onChange}
      label="카드 비밀번호"
      lengthLimit={{ show: false, maxLength: 2 }}
      inputProps={{ inputMode: 'numeric', type: 'password', className: 'text-center' }}
    />
  );
}

interface ExpiractionDateProps extends CreditCardTextFieldProps {
  dateType: 'month' | 'year';
}

function ExpirationDate({ value, onChange, dateType }: ExpiractionDateProps) {
  const isMonth = dateType === 'month';

  return (
    <TextField
      name={'expiration' + capitalizeFirstLetter(dateType)}
      type="text"
      value={value}
      onChange={onChange}
      label={isMonth ? '만료일(월)' : '만료일(년)'}
      placeholder={isMonth ? 'MM' : 'YY'}
      className="w-16"
      lengthLimit={{ show: false, maxLength: 2 }}
      inputProps={{ inputMode: 'numeric', className: 'text-center' }}
    />
  );
}

function OwnerName({ value, onChange }: CreditCardTextFieldProps) {
  return (
    <TextField
      name="ownerName"
      type="text"
      value={value}
      onChange={onChange}
      label="카드 소유자 이름"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      lengthLimit={{ show: true, maxLength: 30 }}
    />
  );
}

export default Object.assign(
  {},
  {
    CardNumber,
    ExpirationDate,
    OwnerName,
    VerificationCode,
    CardPassword,
  }
);

