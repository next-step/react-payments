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

function AddCard() {
  const [card, setCard] = useState(INITIAL_STATE);
  const isInitialState = JSON.stringify(card) === JSON.stringify(INITIAL_STATE);

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
      <Header />
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
        <CardPassword onData={handleCardPassword} />
      </div>
      <Footer />
    </div>
  );
}

export default AddCard;
