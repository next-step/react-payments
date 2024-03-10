import { useState } from 'react';
import Header from '../organisms/Header';
import CardNumber from '../molecules/CardNumber';
import CardExpiration from '../molecules/CardExpiration';
import CardHolder from '../molecules/CardHolder';
import CardSecurityCode from '../molecules/CardSecutiryCode';
import CardPassword from '../molecules/CardPassword';
import Footer from '../organisms/Footer';
import EmptyCard from '../molecules/EmptyCard';
import CardPreview from '../molecules/CardPreview';
import {
  CARD_EXPIRATION_MM_DIGIT,
  CARD_EXPIRATION_YY_DIGIT,
  CARD_NUMBER_TOTAL_DIGIT,
  CARD_PASSWORD_INPUT_DIGIT,
  CARD_SECURITY_CODE_DIGIT,
} from '../../constants/constraints';
import {
  MSG_CHECK_CARD_EXPIRATION,
  MSG_CHECK_CARD_NUMBER,
  MSG_CHECK_CARD_PASSWORD,
  MSG_CHECK_CARD_SECURITY_CODE,
} from '../../constants/messages';

const INITIAL_STATE = {
  cardNumber: ['', '', '', ''],
  expiration: {
    mm: '',
    yy: '',
  },
  user: '',
  securityCode: '',
  password: ['', ''],
};

function AddCard(props) {
  const { goToPreviousStep, goToNextStep } = props;

  const [card, setCard] = useState(INITIAL_STATE);
  const isInitialState = JSON.stringify(card) === JSON.stringify(INITIAL_STATE);

  const handleHeaderClick = () => {
    goToPreviousStep();
  };

  const validateCard = () => {
    if (card.cardNumber.join('').length !== CARD_NUMBER_TOTAL_DIGIT) {
      alert(MSG_CHECK_CARD_NUMBER);
      return false;
    }

    if (
      card.mm.length !== CARD_EXPIRATION_MM_DIGIT
      || card.yy.length !== CARD_EXPIRATION_YY_DIGIT
    ) {
      alert(MSG_CHECK_CARD_EXPIRATION);
      return false;
    }

    if (card.securityCode.length !== CARD_SECURITY_CODE_DIGIT) {
      alert(MSG_CHECK_CARD_SECURITY_CODE);
      return false;
    }

    if (card.password.join('').length !== CARD_PASSWORD_INPUT_DIGIT) {
      alert(MSG_CHECK_CARD_PASSWORD);
      return false;
    }

    return true;
  };

  const handleFooterClick = () => {
    if (validateCard()) {
      goToNextStep(card);
    }
  };

  const handleCard = (key, value) => {
    setCard({ ...card, [key]: value });
  };

  return (
    <div className="app">
      <Header onClick={handleHeaderClick} />
      <div className="card-box">
        {isInitialState ? (
          <EmptyCard mode="add" />
        ) : (
          <CardPreview card={card} size="small" />
        )}
      </div>
      <div className="input-container">
        <CardNumber cardNumber={card.cardNumber} onData={handleCard} />
      </div>
      <div className="input-container">
        <CardExpiration expiration={card.expiration} onData={handleCard} />
      </div>
      <div className="input-container">
        <CardHolder onData={handleCard} />
      </div>
      <div className="input-container">
        <CardSecurityCode onData={handleCard} />
      </div>
      <div className="input-container">
        <CardPassword password={card.password} onData={handleCard} />
      </div>
      <Footer onClick={handleFooterClick} />
    </div>
  );
}

export default AddCard;
