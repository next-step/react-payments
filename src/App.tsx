import CardInfoProvider from "features/card/context/CardInputContext";
import PaymentCard from "pages/PaymentCard";

export default function App() {
  return (
    <CardInfoProvider>
      <PaymentCard />
    </CardInfoProvider>
  );
}
