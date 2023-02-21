import CardList from "./pages/CardList";
import CardRegist from "./pages/CardRegist";
import { Routes, Route } from "react-router-dom";
import InputSample from "./pages/InputSample";
import usePayment from "./hooks/usePayment";
// const cardList = [
//   {
//     nickname: "법인카드",
//     company: "클린카드",
//     number: "1111 - 2222 - oooo - oooo",
//     owner: "HYEWON",
//     expiry: "08/23",
//     backgroundColor: "#94dacd",
//   },
// ];

const Routing = () => {
  const { cardInfo, onHandleCardInfoInput, onHandleRegist, cardList } =
    usePayment();

  return (
    <Routes>
      <Route path="/" element={<CardList cardList={cardList} />} />
      <Route
        path="/regist"
        element={
          <CardRegist
            cardInfo={cardInfo}
            onChange={onHandleCardInfoInput}
            onSubmit={onHandleRegist}
          />
        }
      />
      <Route path="/sample" element={<InputSample />} />
    </Routes>
  );
};

export default Routing;
