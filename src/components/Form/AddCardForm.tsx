import { ChangeEvent, FormEvent } from 'react';
import CVCField from '../Field/CVCField';
import CardNumberField from '../Field/CardNumberField';
import ExpirationField from '../Field/ExpirationField';
import PasswordField from '../Field/PasswordField';
import OwnerField from '../Field/OwnerField';
import { CardInformation } from '@/types';
import { Button } from '../Common';
import { checkRequiredValues } from '@/utils';
import { LIMIT_INPUT_LENGTH } from '@/constants';

type Props = {
  cardInformation: CardInformation;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

function AddCardForm({ cardInformation, onChange, onSubmit }: Props) {
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, password1, password2, cvc, cardOwner } =
    cardInformation;
  const cardNumber = { cardNumber1, cardNumber2, cardNumber3, cardNumber4 };
  const expirationDate = {
    year,
    month,
  };
  const password = { password1, password2 };

  const isValid = checkRequiredValues(cardInformation);

  return (
    <form onSubmit={onSubmit}>
      <CardNumberField
        title="카드 번호"
        value={cardNumber}
        onChange={onChange}
        minLength={LIMIT_INPUT_LENGTH.CARD_NUMBER.MIN}
        maxLength={LIMIT_INPUT_LENGTH.CARD_NUMBER.MAX}
      />
      <ExpirationField
        title="만료일"
        maxLength={LIMIT_INPUT_LENGTH.EXPIRATION}
        value={expirationDate}
        onChange={onChange}
      />
      <OwnerField
        title="카드 소유자 이름(선택)"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요"
        maxLength={LIMIT_INPUT_LENGTH.OWNER_NAME}
        name="cardOwner"
        value={cardOwner}
        onChange={onChange}
      />
      <CVCField title="보안코드(CVC/CCV)" maxLength={3} name="cvc" type="password" value={cvc} onChange={onChange} />
      <PasswordField title="비밀번호" value={password} onChange={onChange} />
      <div className="button-box">
        <Button type="submit" className="button-text" disabled={!isValid}>
          <span>다음</span>
        </Button>
      </div>
    </form>
  );
}

export default AddCardForm;
