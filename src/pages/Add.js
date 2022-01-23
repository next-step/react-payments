import CardInputForm from '../components/CardInputForm';
import EmptyCard from '../components/EmptyCard';
import RootContainer from '../components/container/Root';
import NavToList from '../components/nav/ToList';
import NavToNext from '../components/nav/ToNext';
import AppContainer from '../components/container/App';
import Modal from '../components/modal/Modal';
import { useContext, useState } from 'react';
import CompanyListModal from './CompanyListModal';
import { CardContext } from '../App';
import Card from '../components/Card';
import _ from 'lodash';

const Add = ({ nextStatus }) => {
  const [showModal, setShowModal] = useState(true);
  const { setStatus } = useContext(CardContext);

  const { inputCard, setInputCard } = useContext(CardContext);

  const onClickHandler = (eve, companyName) => {
    eve.preventDefault();
    eve.stopPropagation();
    if (companyName) {
      inputCard.companyName = companyName;
      setInputCard(_.cloneDeep(inputCard));
    }
    setShowModal(false);
  };

  const nextStep = () => {
    setStatus(nextStatus);
  };

  return (
    <RootContainer>
      <AppContainer>
        <NavToList />
        <Card />
        <CardInputForm />
        <NavToNext nextStep={nextStep} />
        {showModal ? (
          <CompanyListModal onClickHandler={onClickHandler} />
        ) : null}
      </AppContainer>
    </RootContainer>
  );
};

export default Add;
