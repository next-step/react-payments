import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { Card } from '@/components/Card';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ReducerContextProvider } from '@/stores/cardCreator';

import { CardNumbersInputListRef, CardNumbersInputListPure } from './InputComponents/CardNumbersInputList';
import { ExpireDatesInputListRef, ExpireDatesInputListPure } from './InputComponents/ExpireDatesInputList';
import { CardOwnerInputRef, CardOwnerInputPure } from './InputComponents/CardOwnerInput';
import { SecurityCodesInputListRef, SecurityCodesInputListPure } from './InputComponents/SecurityCodesInputList';
import { PasswordsInputListRef, PasswordsInputListPure } from './InputComponents/PasswordsInputList';
import { cardNumbersInit, expireDatesInit, passwordsInit, cardOwnersInit, securityCodesInit } from './CardCreatorInits';
import { useInputComponent } from './hooks/useInputComponent';
import { useCardCompanySelectModal } from './hooks/useCardCompanySelectModal';
import { CardCompanyModel } from './hooks/useCardCompanySelectModal/CardCompanySelector/cardCompanyList';

function CardCreator() {
  // FIXME: 이 친구들 모두 걷어내기
  const [cardNumbers, createCardNumberSetter, cardNumberInputRef, cardNumberValidator] =
    useInputComponent<CardNumbersInputListRef>(cardNumbersInit);
  const [expireDates, createExpireDateSetter, expireDateInputRef, expireDateValidator] =
    useInputComponent<ExpireDatesInputListRef>(expireDatesInit);
  const [ownerNames, createOwnerNameSetter, cardOwnerInputRef, ownerNameValidator] =
    useInputComponent<CardOwnerInputRef>(cardOwnersInit);
  const [securityCodes, createSecurityCodeSetter, securityCodeInputRef, securityCodesValidator] =
    useInputComponent<SecurityCodesInputListRef>(securityCodesInit);
  const [passwords, createPasswordSetter, passwordInputRef, passwordsValidator] =
    useInputComponent<PasswordsInputListRef>(passwordsInit);

  const [cardCompany, setCardCompany] = useState<CardCompanyModel | undefined>();

  const { CardCompanySelectModal, showModal, hideModal } = useCardCompanySelectModal();

  return (
    <ThemeProvider className="app" theme={cardCompany?.theme}>
      <ReducerContextProvider>
        <h2 className="page-title">
          <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
        </h2>

        <Card
          cardCompany={cardCompany}
          onCardClick={(e) => {
            e.stopPropagation();
            showModal();
          }}
        />

        <CardNumbersInputListPure ref={cardNumberInputRef} />
        <ExpireDatesInputListPure ref={expireDateInputRef} />
        <CardOwnerInputPure ref={cardOwnerInputRef} />
        <SecurityCodesInputListPure ref={securityCodeInputRef} />
        <PasswordsInputListPure ref={passwordInputRef} />
        <div className="button-box">
          <Link
            to="/add-complete"
            className="button-text"
            onClick={(e) => {
              const inputs = [
                cardNumberValidator,
                expireDateValidator,
                ownerNameValidator,
                securityCodesValidator,
                passwordsValidator,
              ];
              inputs.forEach((states) => states.ref?.current?.setErrorMessage('none'));

              const errorIndex = inputs.findIndex((states) => {
                return !states.state.every(({ value, checkIsValid }) => checkIsValid(value));
              });

              if (errorIndex >= 0) {
                inputs[errorIndex].ref?.current?.setErrorMessage('inValid');
                e.preventDefault();
                alert('카드 정보들을 모두 올바르게 입력해주세요!');
              }
            }}
          >
            다음
          </Link>
        </div>
        <CardCompanySelectModal
          onCardCompanyClick={(cardCompany) => {
            setCardCompany(cardCompany);
            hideModal();
          }}
        />
      </ReducerContextProvider>
    </ThemeProvider>
  );
}

export { CardCreator };
