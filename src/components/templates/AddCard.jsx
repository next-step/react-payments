import Header from '../organisms/Header';
import CardNumber from '../molecules/CardNumber';
import CardExpiration from '../molecules/CardExpiration';
import CardHolder from '../molecules/CardHolder';
import CardSecurityCode from '../molecules/CardSecutiryCode';
import CardPassword from '../molecules/CardPassword';
import Footer from '../organisms/Footer';
import EmptyCard from '../molecules/EmptyCard';

function AddCard() {
  return (
    <div className="app">
      <Header />
      <div className="card-box">
        <EmptyCard mode="add" />
      </div>
      <div className="input-container">
        <CardNumber />
      </div>
      <div className="input-container">
        <CardExpiration />
      </div>
      <div className="input-container">
        <CardHolder />
      </div>
      <div className="input-container">
        <CardSecurityCode />
      </div>
      <div className="input-container">
        <CardPassword />
      </div>
      <Footer />
    </div>
  );
}

export default AddCard;
