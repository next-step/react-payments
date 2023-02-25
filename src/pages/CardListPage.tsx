import styled from '@emotion/styled';

import { Box } from 'components/@common';
import useRouter from 'routes/useRouter';
import { ReactComponent as PlusIcon } from 'assets/PlusIcon.svg';

const CardListPage = () => {
  const { push } = useRouter();

  return (
    <Wrapper display="flex" alignItems="center" justifyContent="center">
      <CardAddButton
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={() => push('/card-registration')}
      >
        <PlusIcon />
      </CardAddButton>
    </Wrapper>
  );
};

export default CardListPage;

const Wrapper = styled(Box)`
  height: 100%;
`;
const CardAddButton = styled(Box)`
  width: 70%;
  height: 150px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.gray03};
`;
