import React from 'react';
import styled from '@emotion/styled';

import { Box, Button, FormFieldControl, TextField } from 'components/@common';
import type { CreditCardType, PartialCreditCardType } from 'types/CreditCard';

const CardDetail = ({ nickname }: PartialCreditCardType) => {
  return (
    <Wrapper>
      <form>
        <FormFieldControl>
          <FormFieldControl.Label>카드 별칭</FormFieldControl.Label>
          <TextField
            type="text"
            maxLength={10}
            defaultValue={nickname}
            className="w-100"
          />
        </FormFieldControl>

        <Box display="flex" justifyContent="space-between">
          <Button type="submit" color="red07" className="w-47">
            삭제하기
          </Button>
          <Button type="submit" className="w-47">
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
