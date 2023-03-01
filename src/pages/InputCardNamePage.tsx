import styled from '@emotion/styled';

import { CreditCard } from 'components';
import { Box, TextField, Button } from 'components/@common';
import type { CreditCardProps } from 'components/CreditCard/CreditCard.types';
import useRouter from 'routes/useRouter';

import { getLocalStorageItem } from 'utils/localStorage';

const InputCardNamePage = () => {
  const { push } = useRouter();
  const item = getLocalStorageItem<CreditCardProps>('CardValues');

  return (
    <Wrapper display="flex" flexDirection="column" justifyContent="center">
      <H1>카드 등록이 완료되었습니다.</H1>
      <CreditCard
        color="brand02"
        name="파란색 카드"
        holderName={item?.holderName}
        number={item?.number}
        expiration={item?.expiration}
      />
      <Form>
        <TextField
          placeholder="카드를 저장할 별명을 입력해주세요."
          maxLength={30}
          className="w-100"
        />
        <Box display="flex" justifyContent="flex-end" className="mt-20">
          <Button
            type="submit"
            color="brand02"
            onClick={() => push('/card-list')}
          >
            카드 생성 완료하기
          </Button>
        </Box>
      </Form>
    </Wrapper>
  );
};

export default InputCardNamePage;

const Wrapper = styled(Box)`
  height: 100%;
`;
const H1 = styled.h1`
  font-size: 22px;
  text-align: center;
  margin: 30px 0;
`;
const Form = styled.form`
  margin: 30px;
`;
