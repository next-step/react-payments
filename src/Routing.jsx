import { PATH } from './Constant';
import CardList from './pages/CardList';
import CardRegist from './pages/CardRegist';
import { Routes, Route } from 'react-router-dom';
import usePayment from './hooks/usePayment';
import CardSave from './pages/CardSave';
import useRoute from './hooks/useRoute';
import Error from './pages/Error';

const Routing = () => {
  const {
    cardInfo,
    handleCardInfoInput,
    handleSave,
    handleSubmit,
    cardList,
    cardCompanyList,
    handleResetCardInfo,
    setCardInfo
  } = usePayment();

  const { movePage } = useRoute();

  return (
    <Routes>
      <Route path={PATH.HOME} element={<CardList cardList={cardList} movePage={movePage} />} />
      <Route
        path={PATH.REGIST}
        element={
          <CardRegist
            cardInfo={cardInfo}
            onChange={handleCardInfoInput}
            onSubmit={handleSubmit}
            cardCompanyList={cardCompanyList}
            setCardInfo={setCardInfo}
            onReset={handleResetCardInfo}
          />
        }
      />
      <Route
        path={PATH.SAVE}
        element={
          <CardSave onSave={handleSave} cardInfo={cardInfo} onChange={handleCardInfoInput} />
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
