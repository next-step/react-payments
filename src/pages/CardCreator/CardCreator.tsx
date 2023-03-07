import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { Card } from '@/components/Card';
import { ThemeProvider } from '@/components/ThemeProvider';
import { useCardContextApiSelector, useSelectCardCompany } from '@/stores/cardCreator';

import { CardNumbersInputListPure } from './InputComponents/CardNumbersInputList';
import { ExpireDatesInputListPure } from './InputComponents/ExpireDatesInputList';
import { CardOwnerInputPure } from './InputComponents/CardOwnerInput';
import { SecurityCodesInputListPure } from './InputComponents/SecurityCodesInputList';
import { PasswordsInputListPure } from './InputComponents/PasswordsInputList';
import { useCardCompanySelectModal } from './hooks/useCardCompanySelectModal';
import { SubmitButton } from './SubmitButton';

function CardCreator() {
  const cardCompany = useSelectCardCompany();
  const apis = useCardContextApiSelector();

  const { CardCompanySelectModal, showModal, hideModal } = useCardCompanySelectModal();

  return (
    <ThemeProvider className="app" theme={cardCompany?.theme}>
      <h2 className="page-title">
        <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
      </h2>

      <Card
        onCardClick={(e) => {
          e.stopPropagation();
          showModal();
        }}
      />

      <CardNumbersInputListPure />
      <ExpireDatesInputListPure />
      <CardOwnerInputPure />
      <SecurityCodesInputListPure />
      <PasswordsInputListPure />
      <SubmitButton />

      <CardCompanySelectModal
        onCardCompanyClick={(cardCompany) => {
          apis?.dispatch({ type: 'cardCompany', payload: cardCompany });
          hideModal();
        }}
      />
    </ThemeProvider>
  );
}

export { CardCreator };
