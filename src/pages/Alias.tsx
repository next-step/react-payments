import React, { ChangeEvent, useContext } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { FlexCenter, PageTitle } from '../common/styles';
import Button from '../components/Button';
import Input from '../components/Input';
import { CardContext } from '../context/CardContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { InputTitle } from '../components/Input/styles';

interface LocationStateProps {
  type: 'add' | 'edit';
}

const Alias = () => {
  const history = useNavigate();
  const location = useLocation();
  const { type } = location.state as LocationStateProps;

  const { card, setCard, addCard, updateCard } = useContext(CardContext);
  const { cardNumber, expirationNumber, ownerName, company, alias } = card;

  const onChangeAlias = (event: ChangeEvent<HTMLInputElement>) => {
    setCard({ ...card, alias: event.target.value });
  };

  const onClickNextButton = () => {
    if (type === 'add') addCard(card);
    else if (type === 'edit') updateCard(card);

    history('/list');
  };

  return (
    <Layout flexColumnCenter>
      <FlexCenter>
        {type === 'add' && (
          <PageTitle mb10>카드등록이 완료되었습니다.</PageTitle>
        )}
        {type === 'edit' && <PageTitle mb10>카드 별칭 수정</PageTitle>}
      </FlexCenter>
      <Card
        type="alias"
        size="big"
        owner={ownerName}
        cardNumber={cardNumber}
        expirationNumber={expirationNumber}
        company={company}
      />
      <InputTitle>
        <span>{alias.length}/10</span>
      </InputTitle>
      <Input
        type="text"
        value={alias}
        minLength={0}
        maxLength={10}
        placeholder="카드 별칭 (선택)"
        onChange={onChangeAlias}
      />

      <Button label="다음" mt50 onClick={onClickNextButton} />
    </Layout>
  );
};

export default Alias;
