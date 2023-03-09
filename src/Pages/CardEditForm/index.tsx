import React, { useState, useRef } from 'react';
import Card from '../../Components/Card/Card';
import { CardInfo } from '../../Components/CardInput';

import '../index.css';

function CardEditForm() {
  const refs = useRef(Array(5).fill(null));
  const [cardIssuer, setCardIssuer] = useState(['']);
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [monthYear, setMonthYear] = useState(['', '']);
  const [cardOwner, setCardOwner] = useState(['']);
  const [secureCode, setSecureCode] = useState(['']);
  const [pinNumber, setPinNumber] = useState(['', '']);

  if (!secureCode || !pinNumber) setCardIssuer(['']);

  return (
    <div className="app">
      <h2 className="page-title">카드 추가</h2>

      <Card
        issuer={cardIssuer.join()}
        number={cardNumber as [string, string, string, string]}
        owner={cardOwner.join()}
        expiration={{ month: monthYear[0], year: monthYear[1] }}
      />

      <CardInfo
        ref={refs.current[0]}
        onValidate={(v) => true}
        onChange={setCardNumber}
        title="카드 번호"
        delimeter={'-'}
      >
        <CardInfo.Number maxLength={4} />
        <CardInfo.Number maxLength={4} />
        <CardInfo.Number maxLength={4} hideValue={true} />
        <CardInfo.Number maxLength={4} hideValue={true} />
      </CardInfo>

      <CardInfo
        ref={refs.current[1]}
        onValidate={(v) => true}
        onChange={setCardOwner}
        title="카드 소유자 이름(선택)"
        countMaxLength={true}
      >
        <CardInfo.Input
          maxLength={30}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </CardInfo>

      <CardInfo
        ref={refs.current[2]}
        onValidate={(v) => true}
        onChange={setMonthYear}
        title="만료일"
        delimeter={'/'}
        width="50%"
      >
        <CardInfo.Month maxLength={2} placeholder="MM" />
        <CardInfo.Year maxLength={2} placeholder="YY" />
      </CardInfo>

      <CardInfo
        ref={refs.current[3]}
        onValidate={(v) => true}
        onChange={setSecureCode}
        title="보안 코드(CVC/CVV)"
        width="25%"
      >
        <CardInfo.Number maxLength={3} hideValue={true} />
      </CardInfo>

      <CardInfo
        ref={refs.current[4]}
        onValidate={(v) => true}
        onChange={setPinNumber}
        title="비밀번호"
        width="60%"
        background={false}
      >
        <CardInfo.Number maxLength={1} hideValue={true} />
        <CardInfo.Number maxLength={1} hideValue={true} />
        <CardInfo.Blocked maxLength={1} />
        <CardInfo.Blocked maxLength={1} />
      </CardInfo>
    </div>
  );
}

export default CardEditForm;
