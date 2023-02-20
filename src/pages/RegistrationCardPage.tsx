import { useState } from 'react';
import styled from '@emotion/styled';

import { CreditCard } from 'components';
import { Box, Header, TextField, FormControl } from 'components/@common';

import { formatCardNumber, formatMMYY } from 'utils/format';

const RegistrationCardPage = () => {
  const [holderName, setHolderName] = useState('');
  const [number, setNumber] = useState('');
  const [expiration, setExpiration] = useState('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setHolderName(value);
  };

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const formattedValue = formatCardNumber(value);
    setNumber(formattedValue);
  };
  const handleExpiration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    const formattedValue = formatMMYY(value);
    setExpiration(formattedValue);
  };

  return (
    <>
      <Header showBackIcon>카드 추가</Header>
      <CreditCard
        color="brand02"
        holderName={holderName}
        number={number}
        expiration={expiration}
      />
      <Wrapper>
        <FormControl>
          <FormControl.Label>카드 번호</FormControl.Label>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <TextField
              placeholder="0000-0000-0000-0000"
              type="text"
              inputMode="numeric"
              pattern="\d*"
              maxLength={19}
              value={number}
              onChange={handleNumber}
              className="w-100"
            />
          </Box>
        </FormControl>

        <FormControl>
          <FormControl.Label>만료일</FormControl.Label>
          <Box display="flex" alignItems="center">
            <TextField
              placeholder="MM / YY"
              maxLength={5}
              value={expiration}
              onChange={handleExpiration}
              className="w-30"
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box display="flex" justifyContent="space-between">
            <FormControl.Label>카드 소유자 이름 (선택)</FormControl.Label>
            <FormControl.Label>{holderName.length}/30</FormControl.Label>
          </Box>
          <TextField
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            value={holderName}
            onChange={handleName}
            className="w-100"
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>보안 코드 (CVC/CVV)</FormControl.Label>
          <TextField placeholder="123" className="w-30" />
        </FormControl>

        <FormControl>
          <FormControl.Label>보안 코드 (CVC/CVV)</FormControl.Label>
          <Box display="flex" className="gap-x-5">
            <TextField type="password" className="w-10" />
            <TextField className="w-10" />
            <TextField className="w-10" />
            <TextField className="w-10" />
          </Box>
        </FormControl>
      </Wrapper>
    </>
  );
};

export default RegistrationCardPage;

const Wrapper = styled.div`
  margin: 30px;
`;
