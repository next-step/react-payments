import { useState, useContext } from 'react';
import uuid from 'react-uuid';
import { AppContext } from '../AppContext';
import Input from './container/Input';
import _ from 'lodash';

const CardInputForm = () => {
  const [cardHolderInfo, setCardHolerInfo] = useState('');
  const { inputCard, setInputCard } = useContext(AppContext);
  const {
    cardNumbers = ['', '', '', ''],
    expirationMonth = '',
    expirationYear = '',
    cardHolder = '',
    cvc = '',
    passwords = ['', '', '', ''],
    companyName = '',
  } = inputCard;

  const onlyNumber = (val) => {
    return val.replace(/[^0-9]/g, '');
  };

  const changeInputCard = (key, value, i) => {
    if (
      key === 'expirationMonth' &&
      value !== '' &&
      !(value >= 1 && value <= 12)
    ) {
      alert('월은 1~12 사이의 숫자만 입력 가능합니다.');
      return;
    }

    if (['cardNumbers', 'passwords'].includes(key)) {
      inputCard[key][i] = onlyNumber(value);
    } else if (['expirationMonth', 'expirationYear', 'cvc'].includes(key)) {
      inputCard[key] = onlyNumber(value);
    } else if (key === 'cardHolder') {
      inputCard[key] = value;
      if (value === '') {
        setCardHolerInfo('');
      } else {
        setCardHolerInfo(`입력글자수 : ${value.length} / 30`);
      }
    }
    setInputCard(_.cloneDeep(inputCard));
  };

  return (
    <>
      <Input title="카드 번호">
        <div className="input-box">
          {cardNumbers.map((cardNumber, i) => (
            <input
              key={`cardNumber-${i}`}
              className="input-basic"
              type="text"
              maxLength={4}
              value={cardNumbers[i]}
              onChange={(eve) =>
                changeInputCard('cardNumbers', eve.target.value, i)
              }
            />
          ))}
        </div>
      </Input>
      <Input title="만료일">
        <div className="input-box w-50">
          <input
            className="input-basic"
            type="text"
            placeholder="MM"
            maxLength={2}
            value={expirationMonth}
            onChange={(eve) =>
              changeInputCard('expirationMonth', eve.target.value)
            }
          />
          <input
            className="input-basic"
            type="text"
            placeholder="YY"
            maxLength={2}
            value={expirationYear}
            onChange={(eve) =>
              changeInputCard('expirationYear', eve.target.value)
            }
          />
        </div>
      </Input>
      <Input title="카드 소유자 이름(선택)">
        <span>{cardHolderInfo}</span>
        <input
          type="text"
          className="input-basic"
          maxLength={30}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={cardHolder}
          onChange={(eve) => changeInputCard('cardHolder', eve.target.value)}
        />
      </Input>
      <Input title="보안코드(CVC/CVV)">
        <input
          className="input-basic w-25"
          type="password"
          maxLength={3}
          value={cvc}
          onChange={(eve) => changeInputCard('cvc', eve.target.value)}
        />
      </Input>
      <Input title="카드 비밀번호">
        {passwords.map((password, i) => (
          <input
            className="input-basic w-15"
            key={`password-${i}`}
            type="password"
            maxLength={1}
            value={password}
            onChange={(eve) =>
              changeInputCard('passwords', eve.target.value, i)
            }
          />
        ))}
      </Input>
    </>
  );
};

export default CardInputForm;
