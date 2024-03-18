<<<<<<< HEAD
import { createActorContext } from "@xstate/react";

import PaymentCard from "pages/PaymentCard";

import { cardMachine } from "features/card/state/cardMachine";

export const CardContext = createActorContext(cardMachine);

export default function App() {
  return (
    <CardContext.Provider>
      <PaymentCard />
    </CardContext.Provider>
=======
import PaymentCard from "pages/PaymentCard";

import CardInfoProvider from "features/card/context/CardInputContext";

export default function App() {
  return (
    <CardInfoProvider>
      <PaymentCard />
    </CardInfoProvider>
>>>>>>> main
  );
}
