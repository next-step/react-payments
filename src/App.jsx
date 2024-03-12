import CardAdd from "./pages/CardAdd.jsx";
import CardList from "./pages/CardList.jsx";
import CardComplete from "./pages/CardComplete.jsx";
import { CardStateProvider } from "../providers/CardState/CardStateProvider.jsx";
import { useState } from "react";
import { PAGE } from "./constants/page.js";
function App() {
  const [step, setStep] = useState(PAGE.CARD_LIST);
  return (
    <div className="app">
      <CardStateProvider>
        {step === PAGE.CARD_LIST && (
          <CardList onNext={() => setStep(PAGE.ADD_CARD)} />
        )}
        {step === PAGE.ADD_CARD && (
          <CardAdd
            onList={() => setStep(PAGE.CARD_LIST)}
            onNext={() => setStep(PAGE.ADD_CARD_SUCCESS)}
          />
        )}
        {step === PAGE.ADD_CARD_SUCCESS && (
          <CardComplete onNext={() => setStep(PAGE.CARD_LIST)} />
        )}
      </CardStateProvider>
    </div>
  );
}

export default App;
