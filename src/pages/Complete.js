import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import NavToNext from '../components/nav/ToNext';
import RootContainer from '../components/container/Root';
import AppContainer from '../components/container/App';
import { useContext, useState } from 'react';
import { AppContext, initialInputCard } from '../AppContext';
import _ from 'lodash';

const Complete = ({ nextStatus }) => {
  const { inputCard, setInputCard, setRouteStatus, cardList, setCardList } =
    useContext(AppContext);
  const [nickName, setNickName] = useState('');
  const nextStep = () => {
    if (nickName === '') {
      alert('입력값이 없습니다.');
      return;
    }
    const card = _.cloneDeep(inputCard);
    card.nickName = nickName;

    const _cardList = [...cardList];
    _cardList.push(card);
    setCardList(_cardList);

    setRouteStatus(nextStatus);
    setInputCard(initialInputCard);
  };

  const changeHandler = (eve) => {
    setNickName(eve.target.value);
  };

  return (
    <RootContainer>
      <AppContainer appClass="flex-column-center">
        <PageTitle title="카드등록이 완료되었습니다." />
        <Card type="big" card={inputCard} />
        <div className="input-container flex-center w-100">
          <input
            className="input-underline w-75"
            type="text"
            placeholder="카드의 별칭을 입력해주세요."
            maxLength={15}
            value={nickName}
            onChange={changeHandler}
          />
        </div>
        <NavToNext nextStep={nextStep} />
      </AppContainer>
    </RootContainer>
  );
};

export default Complete;
