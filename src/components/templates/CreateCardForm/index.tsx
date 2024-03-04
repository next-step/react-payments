import chevronLeft from '@assets/icon/chevron_left_24.svg';
import { Box, Button, Container, HFlex, Text } from '@components/atoms';
import { Header, IconButton } from '@components/molecules';
import { CreditCardTextFields } from '@components/organisms';
import { useState } from 'react';

export default function CreateCard() {
  const [cardInputValue, setCardInputValue] = useState({
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    ownerName: '',
    verificationCode: '',
    cardPassword: '',
  });

  const areAllInputsFilled = Object.values(cardInputValue).some((value) => value === '');
  const disableNextButton = areAllInputsFilled;

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardInputValue({ ...cardInputValue, [e.target.name]: e.target.value });
  };

  const navigateToCardList = () => {
    alert('//TODO: 카드 목록 페이지로 이동되었습니다.');
  };

  return (
    <Container>
      <Header>
        <IconButton onClick={navigateToCardList} src={chevronLeft} alt="뒤로가기 버튼" size={24} />
        <Text size="xl">카드 추가</Text>
      </Header>

      <Box className="my-4 space-y-6">
        <CreditCardTextFields.CardNumber value={cardInputValue.cardNumber} onChange={handleCardInputChange} />
        <HFlex className="gap-4">
          <CreditCardTextFields.ExpirationDate
            dateType="month"
            value={cardInputValue.expirationMonth}
            onChange={handleCardInputChange}
          />
          <CreditCardTextFields.ExpirationDate
            dateType="year"
            value={cardInputValue.expirationYear}
            onChange={handleCardInputChange}
          />
        </HFlex>
        <CreditCardTextFields.OwnerName value={cardInputValue.ownerName} onChange={handleCardInputChange} />
        <CreditCardTextFields.VerificationCode
          value={cardInputValue.verificationCode}
          onChange={handleCardInputChange}
        />
        <CreditCardTextFields.CardPassword value={cardInputValue.cardPassword} onChange={handleCardInputChange} />
      </Box>

      <Box className="w-full">
        <Button
          className="ml-auto block"
          disabled={disableNextButton}
          onClick={() => {
            alert('//TODO: 카드 등록 완료 페이지로 이동되었습니다.');
          }}
        >
          다음
        </Button>
      </Box>
    </Container>
  );
}
