import React, { useRef, useState } from 'react';
import { styled } from '@stitches/react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { filterNumber, updateArray, updateObject, checkIsArrayLast } from '@/utils/utils';
import Card from './Card';
import { cardNumbersInit, expireDatesInit, passwordsInit } from './CardCreatorInits';
import { CardNumberInput } from './CardNumberInput';
import useExtendedState from './hooks/useExtendedState';

function CardCreator() {
  const cardNumbersStateBundle = useExtendedState(cardNumbersInit);
  const [cardNumbers] = cardNumbersStateBundle;

  const [expireDates, setExpireDates] = useExtendedState(expireDatesInit);

  const [ownerName, setOwnerName] = useState<string>();

  const [securityCode, setSecurityCode] = useState<string>();

  const [passwords, setPasswords] = useExtendedState(passwordsInit);
  const passwordInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // 클린코드를 위한 의견!
  // TODO: 작은 컴포넌트로 쪼개기

  // TODO: 모든 input을 받아 i번의 다음으로 넘기는 부분은 공통 hook으로 묶을 수 있겠다.
  // TODO: useForm처럼 form을 간단하게 만들 수 있는 방법은 없을까?
  // input들을 children에 받고 그것을 읽어서 value와 onChange를 알아서 이어주는 식으로 가능할 것이다. 하지만 그게 꼭 필요할까?
  // 우선은 구현 먼저 ㅇㅇ

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
          <CardNumberInput cardNumbersStateBundle={cardNumbersStateBundle} />
          <div className="input-container">
            <span className="input-title">만료일</span>
            <div className="input-box w-50">
              {expireDates.map(({ key, value, placeholder, checkIsValid, checkIsAllowInput }, i) => {
                const isLast = checkIsArrayLast(expireDates, i);
                const isValueValid = checkIsValid(value);

                return (
                  <>
                    <input
                      key={key}
                      className="input-basic"
                      type="text"
                      value={value ?? ''}
                      placeholder={placeholder}
                      onChange={(e) => {
                        const inputVal = filterNumber(e.currentTarget.value);
                        if (!checkIsAllowInput(inputVal)) {
                          return;
                        }

                        setExpireDates(
                          (prevExpireDates) =>
                            updateArray(
                              prevExpireDates,
                              i,
                              updateObject(prevExpireDates[i], 'value', inputVal || undefined)
                            ),
                          {
                            stateRefreshValidator: (prevExpireDates) => {
                              const prevValue = prevExpireDates[i].value;
                              return prevValue !== inputVal;
                            },
                          }
                        );
                      }}
                      onBlur={(e) => {
                        const blurValue = e.currentTarget.value;
                        if (blurValue && blurValue.length !== 0) {
                          if (blurValue.length === 1) {
                            const paddedValue = blurValue.padStart(2, '0');
                            setExpireDates(
                              (prevExpireDates) =>
                                updateArray(prevExpireDates, i, updateObject(prevExpireDates[i], 'value', paddedValue)),
                              {
                                stateRefreshValidator: (prevExpireDates) => {
                                  const prevValue = prevExpireDates[i].value;
                                  return prevValue !== paddedValue;
                                },
                              }
                            );
                            e.currentTarget.value = paddedValue;
                          }
                        }
                      }}
                    />
                    {!isLast && isValueValid && <div className="text-black">/</div>}
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
              value={ownerName ?? ''}
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
              value={securityCode ?? ''}
              onChange={(e) => {
                const numberValue = filterNumber(e.currentTarget.value);
                if (numberValue.length > 3) {
                  return;
                }

                setSecurityCode((prevSecurityCode) => {
                  if (numberValue === prevSecurityCode) {
                    return prevSecurityCode;
                  }
                  return numberValue;
                });
              }}
            />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <div className="flex">
              {passwords.map(({ key, value, checkIsValid, checkIsAllowInput }, i) => {
                const isLast = checkIsArrayLast(passwords, i);
                if (value && value.length < 2) {
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
                    value={value ?? ''}
                    ref={(ref) => {
                      passwordInputsRef.current[i] = ref;
                    }}
                    onChange={(e) => {
                      const numberValue = filterNumber(e.currentTarget.value);
                      if (!checkIsAllowInput(numberValue)) {
                        return;
                      }

                      setPasswords(
                        (prevPasswords) =>
                          updateArray(prevPasswords, i, updateObject(prevPasswords[i], 'value', numberValue)),
                        {
                          stateRefreshValidator: (prevPasswords) => {
                            const prevVal = prevPasswords[i].value;
                            return numberValue !== prevVal;
                          },
                        }
                      );
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
