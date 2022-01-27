import CardInputForm from '../components/CardInputForm';
import RootContainer from '../components/container/Root';
import NavToList from '../components/nav/ToList';
import NavToNext from '../components/nav/ToNext';
import AppContainer from '../components/container/App';
import { useContext, useState } from 'react';
import CompanyListModal from './CompanyListModal';
import { AppContext } from '../AppContext';
import Card from '../components/Card';
import _ from 'lodash';

const Add = ({ nextStatus }) => {
  const [showModal, setShowModal] = useState(true);
  const { setRouteStatus } = useContext(AppContext);

  const { inputCard, setInputCard } = useContext(AppContext);

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
    setRouteStatus(nextStatus);
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
