import { MobilePanel } from '@/components/atoms';
import CardRegistrationEditTemplate from '@/components/templates/CardRegistrationEdit';
import CreditCardRepository from '@/repositories/CreditCardRepository';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { CardFormProvider } from '../CardCreate/CardFormContext';

export default function CardEdit() {
  const navigate = useNavigate();
  const params = useParams();
  const cardId = params.id;
  const cardRepository = new CreditCardRepository();

  if (!cardId) {
    redirect('/');
    return;
  }

  const targetCard = cardRepository.findById(cardId);

  const handleSubmitFinal = (cardNickname: string) => {
    cardRepository.updateCardNickname(targetCard.id, cardNickname);
    navigateToCardList();
  };

  const navigateToCardList = () => {
    navigate('/');
  };

  return (
    <MobilePanel>
      <CardFormProvider
        value={{
          fields: {
            cardNumber: targetCard.cardNumber,
            expirationMonth: targetCard.expirationMonth,
            expirationYear: targetCard.expirationYear,
            ownerName: targetCard.ownerName,
            verificationCode: targetCard.verificationCode,
            cardPassword: targetCard.cardPassword,
          },
          options: {
            cardCompany: targetCard.cardCompany,
            cardNickname: targetCard.cardNickname,
          },
          isErrorField: {
            cardNumber: false,
            expirationMonth: false,
            expirationYear: false,
            ownerName: false,
            verificationCode: false,
            cardPassword: false,
          },
        }}
      >
        <CardRegistrationEditTemplate onPrev={navigateToCardList} onEdit={handleSubmitFinal} />
      </CardFormProvider>
    </MobilePanel>
  );
}
