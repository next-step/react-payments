import { useContext, useState } from 'react';
import styled from '@emotion/styled';

import { Box, Header, Modal } from 'components/@common';
import useRouter from 'routes/useRouter';
import { ReactComponent as PlusIcon } from 'assets/PlusIcon.svg';
import { CardListContext } from 'contexts/CardListProvider';

import { CardDetail, CreditCard } from 'components';
import { PartialCreditCardType } from 'types/CreditCard';

const CardListPage = () => {
  const { push } = useRouter();
  const { cardList } = useContext(CardListContext);
  const [selectedCard, setSelectedCard] = useState<PartialCreditCardType>();

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
        <Modal>
          <Modal.Trigger>
            {cardList &&
              cardList.map((card, index) => (
                <Container
                  key={index}
                  className="w-100"
                  onClick={() => setSelectedCard(card)}
                >
                  <CreditCard {...card} />
                  <Text>{card.nickname}</Text>
                </Container>
              ))}
          </Modal.Trigger>
          <Modal.Content>
            <CardDetail card={selectedCard!} />
          </Modal.Content>
        </Modal>
      </Wrapper>
    </>
  );
};

export default CardListPage;

const Wrapper = styled.div`
  height: calc(100% - 59.5px);
  box-sizing: border-box;
  overflow-y: auto;

  & > div {
    margin: 0px auto;
  }
`;

const Container = styled.button`
  margin: 15px auto;
  text-align: left;
`;

const CardAddButton = styled(Box)`
  width: 70%;
  padding: 15px;
  height: 140px;
  border-radius: 10px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.gray03};
`;

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
`;
