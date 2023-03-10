import React, { useState, useRef, useCallback, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import { CardInfo } from '../../Components/CardInput';
import { type HandleContainer } from '../../Components/CardInput/CardInput';
import Modal from '../../Components/Modal/Modal';
import { cardIssuers, type issuers } from '../../constants/CardIssuers';

import '../index.css';
import './card-edit-form.css';

function CardEditForm() {
  const appRef = useRef(null);
  const infoRefs = useRef<HandleContainer[] | null[]>(Array(5).fill(null));
  const [isModalOpen, setModalOpen] = useState(false);
  const [cardIssuer, setCardIssuer] = useState('');
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [monthYear, setMonthYear] = useState(['', '']);
  const [cardOwner, setCardOwner] = useState(['']);
  const [secureCode, setSecureCode] = useState(['']);
  const [pinNumber, setPinNumber] = useState(['', '']);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleNextClick = useCallback(() => {
    for (const ref of infoRefs.current) {
      if (!ref?.validate()) break;
    }
  }, []);

  useEffect(() => {
    if (
      cardNumber[0].length === 4 &&
      cardNumber[1].length === 4 &&
      cardNumber[2].length === 0 &&
      cardNumber[3].length === 0
    ) {
      const [issuerKey] = Object.entries(cardIssuers).find(
        ([_, value]) => value.BIN === cardNumber[0] + cardNumber[1]
      ) ?? [''];
      if (issuerKey) setCardIssuer(issuerKey);
      else setModalOpen(true);
    }
  }, [cardNumber]);

  return (
    <div className="app" ref={appRef}>
      <h2 className="page-title">카드 추가</h2>

      <Card
        issuer={cardIssuer as issuers}
        number={cardNumber as [string, string, string, string]}
        owner={cardOwner.join()}
        expiration={{ month: monthYear[0], year: monthYear[1] }}
      />

      <CardInfo
        ref={(ref) => (infoRefs.current[0] = ref)}
        onValidate={() => cardNumber.join('').length === 16}
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
        ref={(ref) => (infoRefs.current[1] = ref)}
        onValidate={() => cardOwner.join('').length > 0}
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
        ref={(ref) => (infoRefs.current[2] = ref)}
        onValidate={() => monthYear.join('').length === 4}
        onChange={setMonthYear}
        title="만료일"
        delimeter={'/'}
        width="50%"
      >
        <CardInfo.Month maxLength={2} placeholder="MM" />
        <CardInfo.Year maxLength={2} placeholder="YY" />
      </CardInfo>

      <CardInfo
        ref={(ref) => (infoRefs.current[3] = ref)}
        onValidate={() => secureCode.join('').length === 3}
        onChange={setSecureCode}
        title="보안 코드(CVC/CVV)"
        width="25%"
      >
        <CardInfo.Number maxLength={3} hideValue={true} />
      </CardInfo>

      <CardInfo
        ref={(ref) => (infoRefs.current[4] = ref)}
        onValidate={() => pinNumber.join('').length === 2}
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

      <div className="link-container">
        <button onClick={handleNextClick}>다음</button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        containerRef={appRef}
      >
        {Object.entries(cardIssuers).map(([key, value]) => (
          <div
            key={key}
            className="item-container"
            onClick={() => {
              setCardIssuer(key);
              setModalOpen(false);
            }}
          >
            <div
              className="item-dot"
              style={{ backgroundColor: value.color }}
            ></div>
            <div className="item-name">{value.name}</div>
          </div>
        ))}
      </Modal>
    </div>
  );
}

export default CardEditForm;
