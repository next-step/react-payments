import { useContext } from 'react';
import styled from '@emotion/styled';

import { Box } from 'components/@common';
import useRouter from 'routes/useRouter';
import { ReactComponent as PlusIcon } from 'assets/PlusIcon.svg';
import { CardListContext } from 'contexts/CardListProvider';

import { CreditCard } from 'components';

const CardListPage = () => {
  const { push } = useRouter();
  const { cardList } = useContext(CardListContext);

  return (
    <Wrapper>
      <CardAddButton
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={() => push('/card-registration')}
      >
        <PlusIcon />
      </CardAddButton>
      <>
        {cardList &&
          cardList.map((card, index) => <CreditCard key={index} {...card} />)}
      </>
    </Wrapper>
  );
};

export default CardListPage;

const Wrapper = styled.div`
  height: 100%;
  padding: 15px 0;
  row-gap: 30px;
  box-sizing: border-box;
  overflow-y: scroll;

  & > div {
    margin: 10px auto;
  }
`;

const CardAddButton = styled(Box)`
  width: 70%;
  padding: 15px;
  height: 140px;
  border-radius: 10px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.gray03};
`;
