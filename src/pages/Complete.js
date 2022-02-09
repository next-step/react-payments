import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import NavToNext from '../components/nav/ToNext';
import RootContainer from '../components/container/Root';
import AppContainer from '../components/container/App';
import { useContext, useState } from 'react';
import { AppContext, initialInputCard } from '../AppContext';
import _ from 'lodash';
import uuid from 'react-uuid';

const Complete = ({ nextStatus, mode }) => {
  const {
    inputCard,
    setInputCard,
    setRouteStatus,
    cardList,
    setCardList,
    targetCard,
  } = useContext(AppContext);
  const [nickName, setNickName] = useState('');

  const nextStep = () => {
    if (nickName.length > 10) {
      alert('카드 별칭은 10글자 이상이 들어갈 수 없습니다.');
      return;
    }

    const card = _.cloneDeep(inputCard);
    card.id = uuid();
    card.nickName = nickName !== '' ? nickName : card.companyName;

    const _cardList = [...cardList];
    _cardList.push(card);
    setCardList(_cardList);

    setRouteStatus(nextStatus);
    setInputCard(initialInputCard);
  };

  const modify = () => {
    if (nickName.length > 10) {
      alert('카드 별칭은 10글자 이상이 들어갈 수 없습니다.');
      return;
    }

    const _cardList = [...cardList];

    _cardList.map((card) => {
      if (card.id === targetCard.id) {
        card.nickName = nickName;
      }
      return card;
    });

    setRouteStatus(nextStatus);
    setInputCard(initialInputCard);
  };

  const remove = () => {
    if (
      window.confirm(
        '삭제된 카드는 복구할 수 없습니다.\n정말 삭제하시겠습니까?'
      )
    ) {
      const _cardList = cardList.filter((card) => card.id !== targetCard.id);
      setRouteStatus(nextStatus);
      setCardList(_cardList);
    }
  };

  const changeHandler = (eve) => {
    setNickName(eve.target.value);
  };

  const completeHandler = mode === 'modify' ? modify : nextStep;
  const title =
    mode === 'modify' ? '카드별칭수정' : '카드등록이 완료되었습니다.';
  const card = mode === 'modify' ? targetCard : inputCard;
  return (
    <RootContainer>
      <AppContainer appClass="flex-column-center">
        <PageTitle title={title} />
        <Card type="big" card={card} />
        <div className="input-container flex-center w-100">
          <input
            className="input-underline w-75"
            type="text"
            placeholder={`카드의 별칭을 ${
              mode === 'modify' ? '수정' : '입력'
            }해주세요.`}
            maxLength={15}
            value={nickName}
            onChange={changeHandler}
          />
        </div>
        {mode === 'modify' ? <button onClick={remove}>카드삭제</button> : null}
        <NavToNext nextStep={completeHandler} />
      </AppContainer>
    </RootContainer>
  );
};

export default Complete;
