import PaymentCard from "pages/PaymentCard";

import CardInfoProvider from "features/card/context/CardInputContext";

export default function App() {
  return (
    <CardInfoProvider>
      <PaymentCard />
    </CardInfoProvider>
  );
}
