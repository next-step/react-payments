import React, { useRef, useState, InputHTMLAttributes } from 'react';
import { styled } from '@stitches/react';
import { Link } from 'react-router-dom';

import { routes } from './router';
import Card from './Card';
import { padNumber } from './utils/utils';

const cardNumbersInit: {
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  key: string;
  value?: number;
}[] = [
  {
    key: 'card-first-num',
    value: undefined,
  },
  {
    key: 'card-second-num',
    value: undefined,
  },
  {
    type: 'password',
    key: 'card-third-num',
    value: undefined,
  },
  {
    type: 'password',
    key: 'card-forth-num',
    value: undefined,
  },
];

const expireDatesInit: {
  key: string;
  value?: number;
  placeholder: string;
}[] = [
  {
    key: 'card-expired-month',
    value: undefined,
    placeholder: 'MM',
  },
  {
    key: 'card-expired-year',
    value: undefined,
    placeholder: 'YY',
  },
];

const passwordsInit: {
  key: string;
  value?: number;
}[] = [
  {
    key: 'card-password-first',
    value: undefined,
  },
  {
    key: 'card-password-second',
    value: undefined,
  },
];

function CardCreator() {
  const [cardNumbers, setCardNumbers] = useState(cardNumbersInit);
  const cardNumberInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const [expireDates, setExpireDates] = useState(expireDatesInit);

  const [ownerName, setOwnerName] = useState<string>();

  const [securityCode, setSecurityCode] = useState<number>();

  const [passwords, setPasswords] = useState(passwordsInit);
  const passwordInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // 클린코드를 위한 의견!
  // TODO: 카드 번호 input 부분도 component로 빼기

  // TODO: 모든 input을 받아 i번의 다음으로 넘기는 부분은 공통 hook으로 묶을 수 있겠다.
  // TODO: useForm처럼 form을 간단하게 만들 수 있는 방법은 없을까?
  // input들을 children에 받고 그것을 읽어서 value와 onChange를 알아서 이어주는 식으로 가능할 것이다. 하지만 그게 꼭 필요할까?
  // 우선은 구현 먼저 ㅇㅇ

  // TODO: 숫자인지 아닌지 판단하는 것들은 util로 뺄 수 있다.

  // TODO: 카드 소유자는 컴포넌트로 빼기
  // TODO: 카드 소유자 modal은 portal이용해서 관심사 분리

  return (
    <>
      <h2>1️⃣ 카드 추가</h2>
      <div className="root">
        <div className="app">
          <h2 className="page-title">
            <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
          </h2>
          <div className="card-box">
            <Card
              cardNumbers={cardNumbers.map(({ type, value }) => ({
                isHide: type === 'password',
                value,
              }))}
              expireDates={expireDates.map(({ value }) => value)}
              ownerName={ownerName}
            />
          </div>
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <div className="input-box">
              {cardNumbers.map(({ key, type, value }, i) => {
                const isNotLast = i < cardNumbers.length - 1;
                const isOverThousand = value && value > 1000;
                const dashComponentClassName = isOverThousand && isNotLast ? 'dash' : 'dash hide';

                if (isNotLast && isOverThousand) {
                  if (document.activeElement === cardNumberInputsRef.current[i]) {
                    cardNumberInputsRef.current[i + 1]?.focus();
                  }
                }

                return (
                  <>
                    <input
                      key={key}
                      type={type ?? 'text'}
                      value={value ?? ''}
                      className="input-basic text-black"
                      ref={(inputRef) => {
                        cardNumberInputsRef.current[i] = inputRef;
                      }}
                      onChange={(e) => {
                        const inputValue = e.currentTarget.value;
                        const numberValue = inputValue.replace(/\D/g, '');
                        const fourString = numberValue.substring(0, 4);
                        setCardNumbers((prev) => {
                          const inputNumber = fourString ? Number(fourString) : undefined;
                          if (prev[i].value === inputNumber) {
                            return prev;
                          }

                          const newVal = [...prev];
                          newVal[i] = {
                            type,
                            key,
                            value: inputNumber,
                          };
                          return newVal;
                        });
                      }}
                    />
                    {isNotLast && <div className={`text-black ${dashComponentClassName}`}>-</div>}
                  </>
                );
              })}
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <div className="input-box w-50">
              {expireDates.map(({ key, value, placeholder }, i) => {
                // TODO: 추상화 가능
                const isNotLast = i < expireDates.length - 1;
                // 각 값은 valid한 값의 조건이 다 다르다.
                const isValueValid = value && value <= 12;
                return (
                  <>
                    <input
                      key={key}
                      className="input-basic"
                      type="text"
                      value={padNumber(2, value) || ''}
                      placeholder={placeholder}
                      onChange={(e) => {
                        const inputValue = e.currentTarget.value;
                        // TODO: number가 아닌 값 골라내기 util함수 가능
                        const numberValue = inputValue.replace(/\D/g, '');
                        let inputVal = Number(numberValue);
                        // TODO: 클린코드 필요.
                        if (inputVal > 12 && key === 'card-expired-month') {
                          inputVal %= 10;
                        }

                        if (inputVal > 100 && key === 'card-expired-year') {
                          inputVal %= 100;
                        }

                        setExpireDates((prevExpireDates) => {
                          // TODO: 특정 객체의 값으로 state 갱신 막는 추상화 가능.
                          const prevValue = prevExpireDates[i].value;
                          if (prevValue === inputVal) {
                            return prevExpireDates;
                          }

                          // TODO: 나머지는 그대로 지키면서 특정 property만 바꿔주는 함수 추상화 가능
                          const newExpireDates = [...prevExpireDates];
                          newExpireDates[i] = {
                            key,
                            placeholder,
                            value: inputVal || undefined,
                          };
                          return newExpireDates;
                        });
                      }}
                    />
                    {isNotLast && isValueValid && <div className="text-black">/</div>}
                  </>
                );
              })}
            </div>
          </div>
          <div className="input-container">
            <div className="flex-between">
              <span className="input-title">카드 소유자 이름(선택)</span>
              <div className="input-title">
                <span>{ownerName?.length || 0}</span>
                <span>/</span>
                <span>30</span>
              </div>
            </div>
            <input
              type="text"
              className="input-basic"
              value={ownerName || ''}
              maxLength={30}
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              onChange={(e) => {
                const inputName = e.currentTarget.value;
                setOwnerName(inputName);
              }}
            />
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <input
              className="input-basic w-25"
              type="password"
              value={securityCode || ''}
              onChange={(e) => {
                const inputValue = e.currentTarget.value;
                const numberValue = inputValue.replace(/\D/g, '');
                const inputVal = numberValue ? Number(numberValue) : undefined;
                if (inputVal && inputVal > 1000) {
                  return;
                }

                setSecurityCode((prevSecurityCode) => {
                  if (inputVal === prevSecurityCode) {
                    return prevSecurityCode;
                  }
                  return inputVal;
                });
              }}
            />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <div className="flex">
              {passwords.map(({ key, value }, i) => {
                const isLast = i >= passwords.length - 1;
                if (value && value < 10) {
                  if (document.activeElement === passwordInputsRef.current[i]) {
                    if (isLast) {
                      passwordInputsRef.current[i]?.blur();
                    } else {
                      passwordInputsRef.current[i + 1]?.focus();
                    }
                  }
                }

                return (
                  <input
                    key={key}
                    type="password"
                    className="input-basic w-15 mr-10"
                    value={value || ''}
                    ref={(ref) => {
                      passwordInputsRef.current[i] = ref;
                    }}
                    onChange={(e) => {
                      const inputValue = e.currentTarget.value;
                      const numberValue = inputValue.replace(/\D/g, '');
                      const inputVal = numberValue ? Number(numberValue) : undefined;
                      if (inputVal && inputVal > 10) {
                        return;
                      }

                      setPasswords((prevPasswords) => {
                        const prevVal = prevPasswords[i].value;
                        if (inputVal === prevVal) {
                          return prevPasswords;
                        }
                        const newPasswords = [...prevPasswords];
                        newPasswords[i] = {
                          key,
                          value: inputVal,
                        };
                        return newPasswords;
                      });
                    }}
                  />
                );
              })}
              <span className="flex-center w-15 mr-10">•</span>
              <span className="flex-center w-15 mr-10">•</span>
            </div>
          </div>
          <div className="button-box">
            <span className="button-text">다음</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCreator;
