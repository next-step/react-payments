import CardAdd from "./pages/CardAdd.jsx";
import CardList from "./pages/CardList.jsx";
import CardComplete from "./pages/CardComplete.jsx";
import { CardStateProvider } from "../providers/CardState/CardStateProvider.jsx";
import { useState } from "react";
import { PAGE } from "./constants/page.js";
import { useLocalStorage } from "./hook/useLocalStorage.js";
function App() {
  const [step, setStep] = useState(PAGE.CARD_LIST);
  const [cardInfoList, setCardInfoList] = useLocalStorage("cardInfoList", []);
  return (
    <div className="app">
      <CardStateProvider>
        {step === PAGE.CARD_LIST && (
          <CardList
            cardInfoList={cardInfoList}
            goToAddPage={() => setStep(PAGE.ADD_CARD)}
            goToCompletePage={() => setStep(PAGE.ADD_CARD_SUCCESS)}
          />
        )}
        {step === PAGE.ADD_CARD && (
          <CardAdd
            setCardInfoList={setCardInfoList}
            goToListPage={() => setStep(PAGE.CARD_LIST)}
            goToCompletePage={() => setStep(PAGE.ADD_CARD_SUCCESS)}
          />
        )}
        {step === PAGE.ADD_CARD_SUCCESS && (
          <CardComplete
            cardInfoList={cardInfoList}
            setCardInfoList={setCardInfoList}
            onNext={() => setStep(PAGE.CARD_LIST)}
          />
        )}
      </CardStateProvider>
    </div>
  );
}

export default App;
