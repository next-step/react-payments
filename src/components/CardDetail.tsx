import React, { useContext, useRef } from 'react';
import styled from '@emotion/styled';

import { Box, Button, FormFieldControl, TextField } from 'components/@common';
import type { PartialCreditCardType } from 'types/CreditCard';
import { CardListContext } from 'contexts/CardListProvider';

const CardDetail = ({ card }: { card: PartialCreditCardType }) => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const { removeCardInfo, updateCardNickname } = useContext(CardListContext);

  const handleCardNickname = () => {
    if (!nicknameRef.current) return;
    const { value } = nicknameRef.current;
    updateCardNickname(1, value);
  };

  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormFieldControl>
          <FormFieldControl.Label>카드 별칭</FormFieldControl.Label>
          <TextField
            type="text"
            ref={nicknameRef}
            maxLength={10}
            defaultValue={card.nickname}
            className="w-100"
          />
        </FormFieldControl>

        <Box display="flex" justifyContent="space-between">
          <Button
            type="submit"
            color="red07"
            onClick={() => removeCardInfo(card.id!)}
            className="w-47"
          >
            삭제하기
          </Button>
          <Button type="submit" onClick={handleCardNickname} className="w-47">
            수정하기
          </Button>
        </Box>
      </form>
    </Wrapper>
  );
};

export default CardDetail;

const Wrapper = styled(Box)`
  padding: 15px 20px;
  height: 165px;
  background-color: ${({ theme }) => theme.color.white};
`;
