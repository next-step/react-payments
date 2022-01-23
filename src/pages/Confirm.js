import { useContext } from 'react';
import { CardContext } from '../App';
import Card from '../components/Card';
import CardInputForm from '../components/CardInputForm';
import AppContainer from '../components/container/App';
import RootContainer from '../components/container/Root';
import NavToList from '../components/nav/ToList';
import NavToNext from '../components/nav/ToNext';

const Confirm = ({ nextStatus }) => {
  const { setStatus } = useContext(CardContext);

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
      </AppContainer>
    </RootContainer>
  );
};

export default Confirm;
