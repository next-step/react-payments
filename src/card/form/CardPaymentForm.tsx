import { useState } from 'react';
import { CardDisplay, CardPageIndex, isValidateCardState, useCard, CardAddDisplay, PaymentForm } from '@/card';
import {
  AppDisplay,
  Typography,
  useFunnel,
  HStack,
  styleToken,
  Stack,
  Box,
  formatNumberWithCommas,
  Checkbox,
  Carousel,
  Button,
} from '@/shared';
import { useCheckbox } from '@/shared/components/Checkbox/hooks/useCheckbox';

interface PaymentResult {
  success: boolean;
  message: string;
  orderId: string;
  totalAmount: number;
  cardNumber: string;
  paymentTimestamp: number;
}

type CardPaymentFormProps = PaymentForm & {
  onClose?: () => void;
};

export const CardPaymentForm = ({
  orderId,
  totalAmount,
  onPaymentCancel,
  onPaymentComplete,
  onClose,
}: CardPaymentFormProps) => {
  const { goToIndex } = useFunnel();
  const { ownerCards } = useCard();
  const agreeCheckbox = useCheckbox();
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const selectedCard = ownerCards.length === 0 ? null : ownerCards[selectedCardIndex];
  const formattedTotalAmount = `${formatNumberWithCommas(totalAmount)}원`;
  const isValidSelectedCard = selectedCard ? isValidateCardState(selectedCard) : false;
  const isValidPayment = isValidSelectedCard && agreeCheckbox.checked;

  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(index);
  };

  const navigateToCardAddForm = () => {
    goToIndex(CardPageIndex.CardList);
  };

  const handlePaymentCancel = () => {
    const paymentResult: Pick<PaymentResult, 'success' | 'message' | 'orderId'> = {
      success: false,
      message: '결제가 취소되었습니다.',
      orderId,
    };
    onPaymentCancel(paymentResult);
    onClose?.();
  };

  const handlePaymentComplete = () => {
    if (!selectedCard) {
      return;
    }
    const maskedCardNumber = selectedCard.cardNumber
      .split(' ')
      .map((numberModule, index) => (index === 2 || index === 3 ? '****' : numberModule))
      .join('-');
    const paymentResult: PaymentResult = {
      success: true,
      message: '결제가 완료되었습니다.',
      orderId,
      totalAmount,
      cardNumber: maskedCardNumber,
      paymentTimestamp: Date.now(),
    };
    onPaymentComplete(paymentResult);
    onClose?.();
  };

  return (
    <>
      <AppDisplay.Header>
        <HStack gap="6px">
          <Typography as="h3" variant="title" color={styleToken.color.teal200} margin="0" textAlign="center">
            Near
          </Typography>
          <Typography as="h3" variant="title" color={styleToken.color.black} margin="0" textAlign="center">
            Payments
          </Typography>
        </HStack>
      </AppDisplay.Header>
      <AppDisplay.Body>
        <Typography variant="headline" textAlign="left" margin="40px 0 20px">
          보유 카드
        </Typography>
        <Carousel
          items={[
            ...ownerCards.map((card) => <CardDisplay key={card.cardNumber} size="small" {...card} />),
            <CardAddDisplay onClick={navigateToCardAddForm} />,
          ]}
          onSelect={handleCardSelect}
        />
        <Stack gap="16px" marginTop="50px">
          <Box borderBottom="1px solid #ddd" paddingBottom="8px">
            <Typography variant="headline" textAlign="left" margin="30px 0 20px" paddingBottom="10px">
              결제금액
            </Typography>
          </Box>
          <HStack justifyContent="space-between">
            <Typography variant="title" textAlign="left" margin="0" fontWeight={styleToken.fontWeight.regular}>
              총 결제금액
            </Typography>
            <Typography variant="title" textAlign="left" margin="0" fontWeight={styleToken.fontWeight.regular}>
              {formattedTotalAmount}
            </Typography>
          </HStack>
        </Stack>
        <Stack gap="16px" marginTop="50px">
          <Box borderBottom="1px solid #ddd" paddingBottom="8px">
            <Typography variant="headline" textAlign="left" margin="30px 0 20px" paddingBottom="10px">
              약관 이용 및 동의
            </Typography>
          </Box>
          <HStack justifyContent="space-between" alignItems="center">
            <Typography variant="body" textAlign="left" margin="0">
              주문내역을 확인하였으며, 결제를 진행합니다.
            </Typography>
            <Checkbox id="agree" checked={agreeCheckbox.checked} onChange={agreeCheckbox.change} />
          </HStack>
        </Stack>
      </AppDisplay.Body>
      <AppDisplay.Footer height="300px">
        <HStack height="100%" alignItems="flex-end" gap="10px">
          <Button variant="outline" width="100%" onClick={handlePaymentCancel}>
            취소
          </Button>
          <Button variant="solid" width="100%" onClick={handlePaymentComplete} disabled={!isValidPayment}>
            결제하기
          </Button>
        </HStack>
      </AppDisplay.Footer>
    </>
  );
};
