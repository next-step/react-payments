import React, { MouseEvent, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { Card } from '@/components/Card';
import { ThemeSetter } from '@/components/ThemeSetter';
import { useCardContextApiSelector, useCardInfoSelector } from '@/stores/CardCreatorContext';
import { checkIsArrayLast } from '@/utils';

import { CardNumbersInputListPure } from './InputComponents/CardNumbersInputList';
import { ExpireDatesInputListPure } from './InputComponents/ExpireDatesInputList';
import { CardOwnerInputPure } from './InputComponents/CardOwnerInput';
import { SecurityCodesInputListPure } from './InputComponents/SecurityCodesInputList';
import { PasswordsInputListPure } from './InputComponents/PasswordsInputList';
import { CardCompanyModel, useCardCompanySelectModal } from './hooks/useCardCompanySelectModal';
import { SubmitButton } from './SubmitButton';

export function CardCreator() {
  const cardInfo = useCardInfoSelector();
  const apis = useCardContextApiSelector();

  const { CardCompanySelectModal, showModal, hideModal } = useCardCompanySelectModal();

  const handleCardClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      showModal();
    },
    [showModal]
  );

  const handleCardCompanySelectModalClick = useCallback(
    (cardCompany: CardCompanyModel) => {
      apis?.dispatch({ type: 'cardCompany', payload: { value: cardCompany } });
      hideModal();
    },
    [apis, hideModal]
  );

  // TODO: cardInfo가 바뀔때마다 useEffect로 invalid체크 -> invalid 주목시키기 + 다음 ref focus하기
  useEffect(() => {
    if (!cardInfo) return;

    const { cardCompany, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardInfo;
    const inputLists = [[cardCompany], cardNumbers, expireDates, cardOwners, securityCodes, passwords];

    inputLists.every((inputList, inputListIndex) => {
      const isActiveElement = inputList?.some((input) => {
        return document.activeElement === input.ref;
      });

      if (!isActiveElement) return true;

      // @ts-ignore
      const isEveryInputListValid = inputList?.every((input, i) => {
        // TODO: 이 로직을 추상화해서 선언적으로 보이도록 클린코드 필요.

        const isFinished = input?.checkIsInputFinished();

        if (!isFinished) {
          input?.ref?.focus();
          return isFinished;
        }

        if (checkIsArrayLast(inputList, i)) {
          inputList?.[i + 1]?.ref?.focus();
        }

        return isFinished;
      });

      if (isEveryInputListValid && !checkIsArrayLast(inputLists, inputListIndex)) {
        inputLists?.[inputListIndex + 1][0]?.ref?.focus();
      }

      return isEveryInputListValid;
    });
  }, [cardInfo]);

  return (
    <ThemeSetter className="app" theme={cardInfo?.cardCompany.value?.theme}>
      <h2 className="page-title">
        <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
      </h2>

      <Card onCardClick={handleCardClick} />

      <CardNumbersInputListPure cardNumbers={cardInfo?.cardNumbers} />
      <ExpireDatesInputListPure expireDates={cardInfo?.expireDates} />
      <CardOwnerInputPure cardOwners={cardInfo?.cardOwners} />
      <SecurityCodesInputListPure securityCodes={cardInfo?.securityCodes} />
      <PasswordsInputListPure passwords={cardInfo?.passwords} />

      <SubmitButton />

      <CardCompanySelectModal onCardCompanyClick={handleCardCompanySelectModalClick} />
    </ThemeSetter>
  );
}
