import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CARD_COMPANIES, PLACEHOLDER_TEXT, ROUTE } from '@/constants';
import { CARD_LIST_ACTION, useCardListDispatch } from '@/store';
import useCard from '@/store/hooks/useCard';
import styled from '@emotion/styled';
import { Input } from '@/components';

type CardNicknameEditProps = {
  formId: string;
  cardId: number;
};

const CardNicknameEdit = ({ formId, cardId }: CardNicknameEditProps) => {
  const { cardCompany, cardNickname } = useCard(cardId);
  const navigate = useNavigate();
  const dispatch = useCardListDispatch();
  const maxCardNicknameLength = 10;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardNickname = e.currentTarget.cardNickname.value;

    dispatch(
      CARD_LIST_ACTION.UPDATE_CARD_NICKNAME(
        cardId,
        cardNickname ? cardNickname : CARD_COMPANIES[cardCompany].name
      )
    );
    navigate(ROUTE.CARD);
  };
  return (
    <StyledForm id={formId} onSubmit={handleSubmit}>
      <Input.LineInput
        textAlign="center"
        placeholder={PLACEHOLDER_TEXT.CARD_NICKNAME}
        defaultValue={cardNickname}
        label="cardNickname"
        name="cardNickname"
        maxLength={maxCardNicknameLength}
        width="70%"
      />
    </StyledForm>
  );
};

export default CardNicknameEdit;

const StyledForm = styled.form`
  margin-top: 16px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
