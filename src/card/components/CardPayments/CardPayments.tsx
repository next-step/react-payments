import {
  CardAddForm,
  CardCompleteForm,
  CardListForm,
  CardPageIndex,
  CardPaymentForm,
  CardProvider,
  CardState,
  PaymentForm,
} from '@/card';
import { AppDisplay, Funnel, OverlayProvider } from '@/shared';

type CardPaymentsProps = PaymentForm & {
  cardStorageKey: string;
  initialOwnerCards: CardState[];
  onClose?: () => void;
};

export const CardPayments = ({
  cardStorageKey,
  orderId,
  totalAmount,
  initialOwnerCards,
  onPaymentComplete,
  onPaymentCancel,
  onClose,
}: CardPaymentsProps) => (
  <AppDisplay.Root>
    <OverlayProvider>
      <CardProvider initialOwnerCards={initialOwnerCards} cardStorageKey={cardStorageKey}>
        <Funnel.Root>
          <Funnel.Step index={CardPageIndex.CardPayment}>
            <CardPaymentForm
              orderId={orderId}
              totalAmount={totalAmount}
              onPaymentComplete={onPaymentComplete}
              onPaymentCancel={onPaymentCancel}
              onClose={onClose}
            />
          </Funnel.Step>
          <Funnel.Step index={CardPageIndex.CardList}>
            <CardListForm />
          </Funnel.Step>
          <Funnel.Step index={CardPageIndex.CardAdd}>
            <CardAddForm />
          </Funnel.Step>
          <Funnel.Step index={CardPageIndex.CardComplete}>
            <CardCompleteForm />
          </Funnel.Step>
        </Funnel.Root>
      </CardProvider>
    </OverlayProvider>
  </AppDisplay.Root>
);
