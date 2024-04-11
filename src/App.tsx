import { PaymentCancel, PaymentResult, useLoadNearPayments } from '@/card';
import { Box, Button } from '@/shared';

const App = () => {
  const loadNearPayments = useLoadNearPayments({
    clientId: 'test-1234',
  });

  const openPayments = async () => {
    try {
      loadNearPayments({
        orderId: '1234',
        totalAmount: 10000,
        onPaymentComplete: (paymentResult: PaymentResult) => {
          alert(`paymentResult:\n${JSON.stringify(paymentResult)}`);
        },
        onPaymentCancel: (paymentCancel: PaymentCancel) => {
          alert(`paymentCancel:\n${JSON.stringify(paymentCancel)}`);
        },
      });
    } catch (e) {
      alert(`paymentError:\n${JSON.stringify(e)}`);
      console.error('paymentError: ', e);
    }
  };

  return (
    <Box width="100%" height="100vh">
      <Button onClick={openPayments}>열기</Button>
    </Box>
  );
};
export default App;
