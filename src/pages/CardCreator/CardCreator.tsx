import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { Card } from '@/components/Card';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ReducerContextProvider } from '@/stores/cardCreator';

import { CardNumbersInputListPure } from './InputComponents/CardNumbersInputList';
import { ExpireDatesInputListPure } from './InputComponents/ExpireDatesInputList';
import { CardOwnerInputPure } from './InputComponents/CardOwnerInput';
import { SecurityCodesInputListPure } from './InputComponents/SecurityCodesInputList';
import { PasswordsInputListPure } from './InputComponents/PasswordsInputList';
import { useCardCompanySelectModal } from './hooks/useCardCompanySelectModal';
import { CardCompanyModel } from './hooks/useCardCompanySelectModal/CardCompanySelector/cardCompanyList';
import { SubmitButton } from './SubmitButton';
import { ErrorContextProvider } from '@/stores/ErrorContext';

function CardCreator() {
  const [cardCompany, setCardCompany] = useState<CardCompanyModel | undefined>();

  const { CardCompanySelectModal, showModal, hideModal } = useCardCompanySelectModal();

  return (
    <ThemeProvider className="app" theme={cardCompany?.theme}>
      <ErrorContextProvider>
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

          <CardNumbersInputListPure />
          <ExpireDatesInputListPure />
          <CardOwnerInputPure />
          <SecurityCodesInputListPure />
          <PasswordsInputListPure />
          <SubmitButton />

          <CardCompanySelectModal
            onCardCompanyClick={(cardCompany) => {
              setCardCompany(cardCompany);
              hideModal();
            }}
          />
        </ReducerContextProvider>
      </ErrorContextProvider>
    </ThemeProvider>
  );
}

export { CardCreator };
