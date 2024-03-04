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

const INITIAL_STATE = {
  cardNumber: ['', '', '', ''],
  mm: '',
  yy: '',
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
    if (card.cardNumber.join('').length !== 16) {
      alert('카드 번호를 확인해주세요.');
      return false;
    }

    if (card.mm.length !== 2 || card.yy.length !== 2) {
      alert('카드 만료일을 확인해주세요.');
      return false;
    }

    if (card.securityCode.length !== 3) {
      alert('카드 보안코드를 확인해주세요.');
      return false;
    }

    if (card.password.join('').length !== 2) {
      alert('카드 비밀번호를 확인해주세요.');
      return false;
    }

    return true;
  };

  const handleFooterClick = () => {
    if (validateCard()) {
      goToNextStep(card);
    }
  };

  const handleCardNumber = (key, value) => {
    setCard({ ...card, [key]: value });
  };

  const handleCardExpiration = (key, value) => {
    setCard({ ...card, [key]: value });
  };

  const handleCardHolder = (key, value) => {
    setCard({ ...card, [key]: value });
  };

  const handleCardSecurityCode = (key, value) => {
    setCard({ ...card, [key]: value });
  };

  const handleCardPassword = (key, value) => {
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
        <CardNumber cardNumber={card.cardNumber} onData={handleCardNumber} />
      </div>
      <div className="input-container">
        <CardExpiration
          mm={card.mm}
          yy={card.yy}
          onData={handleCardExpiration}
        />
      </div>
      <div className="input-container">
        <CardHolder onData={handleCardHolder} />
      </div>
      <div className="input-container">
        <CardSecurityCode onData={handleCardSecurityCode} />
      </div>
      <div className="input-container">
        <CardPassword password={card.password} onData={handleCardPassword} />
      </div>
      <Footer onClick={handleFooterClick} />
    </div>
  );
}

export default AddCard;
