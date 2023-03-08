import React, { MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { Card } from '@/components/Card';
import { ThemeSetter } from '@/components/ThemeSetter';
import { useCardContextApiSelector, useSelectCardCompany } from '@/stores/CardCreatorContext';

import { CardNumbersInputListPure } from './InputComponents/CardNumbersInputList';
import { ExpireDatesInputListPure } from './InputComponents/ExpireDatesInputList';
import { CardOwnerInputPure } from './InputComponents/CardOwnerInput';
import { SecurityCodesInputListPure } from './InputComponents/SecurityCodesInputList';
import { PasswordsInputListPure } from './InputComponents/PasswordsInputList';
import { CardCompanyModel, useCardCompanySelectModal } from './hooks/useCardCompanySelectModal';
import { SubmitButton } from './SubmitButton';

function CardCreator() {
  const cardCompany = useSelectCardCompany();
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
      apis?.dispatch({ type: 'cardCompany', payload: cardCompany });
      hideModal();
    },
    [apis, hideModal]
  );

  return (
    <ThemeSetter className="app" theme={cardCompany?.theme}>
      <h2 className="page-title">
        <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
      </h2>

      <Card onCardClick={handleCardClick} />

      <CardNumbersInputListPure />
      <ExpireDatesInputListPure />
      <CardOwnerInputPure />
      <SecurityCodesInputListPure />
      <PasswordsInputListPure />

      <SubmitButton />

      <CardCompanySelectModal onCardCompanyClick={handleCardCompanySelectModalClick} />
    </ThemeSetter>
  );
}

export { CardCreator };
