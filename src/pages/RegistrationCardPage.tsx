import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CreditCard } from 'components';
import { Box, Header, TextField, FormControl } from 'components/@common';

const textFieldCSS = css`
  width: 20%;
`;

const RegistrationCardPage = () => {
  return (
    <>
      <Header showBackIcon>카드 추가</Header>
      <CreditCard color="brand02" />
      <Wrapper>
        <FormControl>
          <FormControl.Label>카드 번호</FormControl.Label>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <TextField placeholder="0000" className="w-20" />
            <FormControl.Separator>-</FormControl.Separator>
            <TextField placeholder="0000" className="w-20" />
            <FormControl.Separator>-</FormControl.Separator>
            <TextField placeholder="0000" className="w-20" />
            <FormControl.Separator>-</FormControl.Separator>
            <TextField placeholder="0000" className="w-20" />
          </Box>
        </FormControl>

        <FormControl>
          <FormControl.Label>만료 일자</FormControl.Label>
          <Box display="flex" alignItems="center">
            <TextField placeholder="MM" className="w-20" />
            <FormControl.Separator>/</FormControl.Separator>
            <TextField placeholder="YY" className="w-20" />
          </Box>
        </FormControl>

        <FormControl>
          <Box display="flex" justifyContent="space-between">
            <FormControl.Label>카드 소유자 이름 (선택)</FormControl.Label>
            <FormControl.Label>0/30</FormControl.Label>
          </Box>
          <TextField
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
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
            <TextField className="w-10" />
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
