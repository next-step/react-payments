import styled from '@emotion/styled';

import { CreditCard } from 'components';
import { Box, TextField, Button } from 'components/@common';
import type { CreditCardProps } from 'components/CreditCard/CreditCard.types';
import useRouter from 'routes/useRouter';
import { ReactComponent as PlusIcon } from 'assets/PlusIcon.svg';

import { getLocalStorageItem } from 'utils/localStorage';

const CardListPage = () => {
  const { push } = useRouter();
  const item = getLocalStorageItem<CreditCardProps>('CardValues');

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
