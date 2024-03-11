import { MobilePanel } from '@/components/atoms';
import CardRegistrationSuccessTemplate from '@/components/templates/CardRegistrationSuccess';
import CreateCardFormTemplate from '@/components/templates/CreateCardForm';
import { CreditCard } from '@/entities/creditcard';
import CreditCardRepository from '@/repositories/CreditCardRepository';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardFormFields, CardFormOptions, CardFormProvider, INITIAL_CARD_FORM_STATE } from './CardFormContext';

export const CARD_FORMS = {
  CreateCardForm: 'CreateCardForm',
  CardRegistrationSuccess: 'CardRegistrationSuccess',
} as const;

type CardForm = (typeof CARD_FORMS)[keyof typeof CARD_FORMS];

export default function CardForm() {
  const [forms, setForms] = useState<CardForm[]>([CARD_FORMS.CreateCardForm]);
  const navigate = useNavigate();

  const setNextForm = (formName: CardForm) => {
    setForms((prev) => [...prev, formName]);
  };

  const handleSubmitFields = () => {
    setNextForm(CARD_FORMS.CardRegistrationSuccess);
  };

  const handleSubmitFinal = (card: CardFormFields & CardFormOptions) => {
    const cardWithIdAndDate: CreditCard = { ...card, id: self.crypto.randomUUID(), date: Date.now() };
    const cardRepository = new CreditCardRepository();
    cardRepository.create(cardWithIdAndDate);
    navigateToCardList();
  };

  const navigateToPreviousForm = () => {
    if (forms.length === 1) return navigateToCardList();

    setForms((prev) => prev.slice(0, -1));
  };

  const navigateToCardList = () => {
    navigate('/');
  };

  const renderCurrentStep = () => {
    const currentForm = forms[forms.length - 1];
    switch (currentForm) {
      case CARD_FORMS.CreateCardForm:
        return <CreateCardFormTemplate onPrev={navigateToPreviousForm} onNext={handleSubmitFields} />;
      case CARD_FORMS.CardRegistrationSuccess:
        return <CardRegistrationSuccessTemplate onPrev={navigateToPreviousForm} onSubmit={handleSubmitFinal} />;
      default:
        return <></>;
    }
  };

  return (
    <MobilePanel>
      <CardFormProvider value={INITIAL_CARD_FORM_STATE}>{renderCurrentStep()}</CardFormProvider>
    </MobilePanel>
  );
}
