import { PaymentResult } from './PaymentResult.type';

export type PaymentForm = {
  orderId: string;
  totalAmount: number;
  onPaymentCancel: (paymentResult: Pick<PaymentResult, 'success' | 'message' | 'orderId'>) => void;
  onPaymentComplete: (paymentResult: PaymentResult) => void;
};
