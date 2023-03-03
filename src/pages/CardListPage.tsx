import { useContext } from 'react';
import styled from '@emotion/styled';

import { Box, Header } from 'components/@common';
import useRouter from 'routes/useRouter';
import { ReactComponent as PlusIcon } from 'assets/PlusIcon.svg';
import { CardListContext } from 'contexts/CardListProvider';

import { CreditCard } from 'components';

const CardListPage = () => {
  const { push } = useRouter();
  const { cardList } = useContext(CardListContext);

  return (
    <>
      <Header>카드 목록</Header>
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
            cardList.map((card, index) => (
              <>
                <CreditCard key={index} {...card} />
                <H3>{card.nickname}</H3>
              </>
            ))}
        </>
      </Wrapper>
    </>
  );
};

export default CardListPage;

const Wrapper = styled.div`
  height: calc(100% - 59.5px);
  box-sizing: border-box;
  overflow-y: scroll;

  & > div {
    margin: 13px auto 7px auto;
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

const H3 = styled.h3`
  text-align: center;
`;
