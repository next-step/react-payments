import { Input } from '@/components/molecules';
import { InputProps } from '@/components/molecules/Input';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

interface CreditCardInputProps {
  value: InputProps['value'];
  onChange: InputProps['onChange'];
}

const keepOnlyNumeric = (text: string) => {
  return text.replace(/\D/g, '');
};

const keepOnlyAlphabetHangulAndSpace = (text: string) => {
  const pattern = /[^a-zA-Z가-힣\sㄱ-ㅎㅏ-ㅣ]/g;

  return text.replace(pattern, '');
};

function CardNumber({ value, onChange }: CreditCardInputProps) {
  const MAX_LENGTH_FOR_FORMATTED_CODE = 19;

  return (
    <Input
      name="cardNumber"
      type="text"
      value={value}
      onChange={onChange}
      label="카드 번호"
      lengthLimit={{ show: false, maxLength: MAX_LENGTH_FOR_FORMATTED_CODE }}
      inputProps={{ inputMode: 'numeric' }}
      replacer={(text) => {
        let replacedText = keepOnlyNumeric(text);
        // 카드 번호 4자리마다 -가 삽입된다.
        replacedText = replacedText.replace(/(\d{4})/g, '$1-');
        // 마지막이 "-"이면 제거한다.
        replacedText = replacedText.endsWith('-') ? replacedText.slice(0, -1) : replacedText;

        return replacedText;
      }}
    />
  );
}

function VerificationCode({ value, onChange }: CreditCardInputProps) {
  return (
    <Input
      name="verificationCode"
      className="w-28"
      type="text"
      value={value}
      onChange={onChange}
      label="보안코드(CVC/CVV)"
      lengthLimit={{ show: false, maxLength: 3 }}
      inputProps={{ inputMode: 'numeric', type: 'password', className: 'text-center' }}
      replacer={keepOnlyNumeric}
    />
  );
}

function CardPassword({ value, onChange }: CreditCardInputProps) {
  return (
    <Input
      name="cardPassword"
      className="w-28"
      type="text"
      value={value}
      onChange={onChange}
      label="카드 비밀번호"
      lengthLimit={{ show: false, maxLength: 2 }}
      inputProps={{ inputMode: 'numeric', type: 'password', className: 'text-center' }}
      replacer={keepOnlyNumeric}
    />
  );
}

interface ExpiractionDateProps extends CreditCardInputProps {
  dateType: 'month' | 'year';
}

function ExpirationDate({ value, onChange, dateType }: ExpiractionDateProps) {
  const isMonth = dateType === 'month';

  return (
    <Input
      name={'expiration' + capitalizeFirstLetter(dateType)}
      type="text"
      value={value}
      onChange={onChange}
      label={isMonth ? '만료일(월)' : '만료일(년)'}
      placeholder={isMonth ? 'MM' : 'YY'}
      className="w-16"
      lengthLimit={{ show: false, maxLength: 2 }}
      inputProps={{ inputMode: 'numeric', className: 'text-center' }}
      replacer={keepOnlyNumeric}
    />
  );
}

function OwnerName({ value, onChange }: CreditCardInputProps) {
  return (
    <Input
      name="ownerName"
      type="text"
      value={value}
      onChange={onChange}
      label="카드 소유자 이름(선택)"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      lengthLimit={{ show: true, maxLength: 30 }}
      replacer={keepOnlyAlphabetHangulAndSpace}
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
