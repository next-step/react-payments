import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import CVCField from '../Field/CVCField';
import CardNumberField from '../Field/CardNumberField';
import ExpirationField from '../Field/ExpirationField';
import PasswordField from '../Field/PasswordField';
import TextField from '../Field/TextField';
import { Card } from '../Common';

function AddCardForm() {
  const [state, setState] = useState({
    first: '',
    second: '',
    third: '',
    forth: '',
    month: '',
    year: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => console.log;
  return (
    <form onSubmit={onSubmit}>
      <CardNumberField
        title="카드 번호"
        value={{ first: state.first, second: state.second, third: state.third, forth: state.forth }}
        onChange={onChange}
      />
      <ExpirationField
        title="만료일"
        min={0}
        maxLength={2}
        value={{ month: state.month, year: state.year }}
        onChange={onChange}
      />
      {/*<TextField
        title="카드 소유자 이름(선택)"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요"
        value="1"
        maxLength={30}
        name="owner"
      />
      <CVCField title="보안코드(CVC/CCV)" value="" maxLength={3} name="cvc" type="password" />
      <PasswordField title="비밀번호" />
      <div className="button-box">
        <span className="button-text">다음</span>
      </div> */}
    </form>
  );
}

export default AddCardForm;
