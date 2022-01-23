import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import NavToNext from '../components/nav/ToNext';
import RootContainer from '../components/container/Root';
import AppContainer from '../components/container/App';
import { useContext } from 'react';
import { CardContext } from '../App';

const Complete = ({ nextStatus }) => {
  const { setStatus } = useContext(CardContext);

  const nextStep = () => {
    setStatus(nextStatus);
  };

  return (
    <RootContainer>
      <AppContainer appClass="flex-column-center">
        <PageTitle title="카드등록이 완료되었습니다." />
        <Card />
        <div className="input-container flex-center w-100">
          <input
            className="input-underline w-75"
            type="text"
            placeholder="카드의 별칭을 입력해주세요."
          />
        </div>
        <NavToNext nextStep={nextStep} />
      </AppContainer>
    </RootContainer>
  );
};

export default Complete;
