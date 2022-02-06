import CardInputForm from '../components/CardInputForm';
import RootContainer from '../components/container/Root';
import NavToList from '../components/nav/ToList';
import NavToNext from '../components/nav/ToNext';
import AppContainer from '../components/container/App';
import { useContext, useState } from 'react';
import CompanyListModal from '../components/modal/CompanyListModal';
import { AppContext } from '../AppContext';
import Card from '../components/Card';
import _ from 'lodash';

const Add = ({ nextStatus = '' }) => {
  const [showModal, setShowModal] = useState(true);
  const { setRouteStatus } = useContext(AppContext);
  const [type, setType] = useState('empty');

  const { inputCard, setInputCard } = useContext(AppContext);

  const onClickHandler = (eve, companyName, color) => {
    eve.preventDefault();
    eve.stopPropagation();
    if (companyName) {
      const card = _.cloneDeep(inputCard);
      card.companyName = companyName;
      card.color = color;
      setInputCard(_.cloneDeep(card));
    }
    setShowModal(false);
  };

  const isValidated = () => {
    const {
      cardNumbers,
      expirationMonth,
      expirationYear,
      cardHolder,
      cvc,
      passwords,
      companyName,
    } = inputCard;
    if (
      cardNumbers.includes('') ||
      !expirationMonth ||
      !expirationYear ||
      !cardHolder ||
      !cvc ||
      !companyName ||
      passwords.includes('')
    ) {
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (!isValidated()) {
      alert('입력되지 않은 값이 있습니다.');
      return;
    }
    setRouteStatus(nextStatus);
  };

  return (
    <RootContainer>
      <AppContainer>
        <NavToList />
        <Card type={type} card={inputCard} />
        <CardInputForm setType={setType} />
        <NavToNext nextStep={nextStep} />
        {showModal ? (
          <CompanyListModal onClickHandler={onClickHandler} />
        ) : null}
      </AppContainer>
    </RootContainer>
  );
};

export default Add;
