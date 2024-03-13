import { Box, Button, Container, Text } from '@/components/atoms';
import { Header } from '@/components/molecules';
import { CreditCard } from '@/components/organisms';
import { CreditCard as CreditCardEntity } from '@/entities/creditcard';
import CreditCardRepository from '@/repositories/CreditCardRepository';
import { TYPOGRAPHY_SIZE_MAP } from '@/styles/guide';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CardList() {
  const creditCardRepository = new CreditCardRepository();
  const navigate = useNavigate();
  const [cards, setCards] = useState<CreditCardEntity[]>(() => {
    return creditCardRepository.findAll();
  });

  const orderCardsByDate = cards.sort((a, b) => b.date - a.date);

  const handleDeleteClick = (id: string) => () => {
    creditCardRepository.deleteById(id);
    setCards(creditCardRepository.findAll());
  };

  const navigateToCardEdit = (id: string) => {
    navigate(`/edit/${id}`);
  };

  const handleCardClick = (id: string) => () => {
    navigateToCardEdit(id);
  };

  return (
    <Container className="overflow-x-auto">
      <Header>
        <Text size="xl">보유 카드</Text>
      </Header>
      <Box className="flex flex-col items-center gap-8 mt-10">
        {orderCardsByDate.map((card) => {
          return (
            <Box key={card.id} className="flex flex-col gap-2 cursor-pointer" onClick={handleCardClick(card.id)}>
              <CreditCard {...card} />
              <Box className="flex items-center">
                <Text className="block mx-auto ml-auto text-center" size="sm">
                  {card.cardNickname}
                </Text>
                <Button onClick={handleDeleteClick(card.id)} className={`${TYPOGRAPHY_SIZE_MAP['sm']} p-0`}>
                  ❌
                </Button>
              </Box>
            </Box>
          );
        })}
        <Link to="/create">
          <Box className="w-[208px] h-[130px] bg-gray-300 grid place-items-center rounded-md">카드 등록하기➕</Box>
        </Link>
      </Box>
    </Container>
  );
}
