import { ChangeEvent, FormEvent } from 'react';
import CVCField from '../Field/CVCField';
import CardNumberField from '../Field/CardNumberField';
import ExpirationField from '../Field/ExpirationField';
import PasswordField from '../Field/PasswordField';
import TextField from '../Field/TextField';
import { CardInformation } from '@/types';

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
  return (
    <form onSubmit={onSubmit}>
      <CardNumberField title="카드 번호" value={cardNumber} onChange={onChange} />
      <ExpirationField title="만료일" min={0} maxLength={2} value={expirationDate} onChange={onChange} />
      <TextField
        title="카드 소유자 이름(선택)"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요"
        value={cardOwner}
        maxLength={30}
        name="cardOwner"
        onChange={onChange}
      />
      <CVCField title="보안코드(CVC/CCV)" name="cvc" type="password" value={cvc} maxLength={3} onChange={onChange} />
      <PasswordField title="비밀번호" value={password} onChange={onChange} />
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </form>
  );
}

export default AddCardForm;
