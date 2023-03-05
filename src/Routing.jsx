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
    handleInputChange,
    handleSave,
    handleSubmit,
    cardList,
    cardCompanyList,
    resetCardInfo,
    setCardInfo
  } = usePayment();

  const { movePage } = useRoute();

  return (
    <Routes>
      <Route
        path={PATH.HOME}
        element={<CardList cardList={cardList} movePage={movePage} setCardInfo={setCardInfo} />}
      />
      <Route
        path={PATH.REGIST}
        element={
          <CardRegist
            cardInfo={cardInfo}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            cardCompanyList={cardCompanyList}
            setCardInfo={setCardInfo}
            onReset={resetCardInfo}
          />
        }
      />
      <Route
        path={PATH.SAVE}
        element={<CardSave onSave={handleSave} cardInfo={cardInfo} onChange={handleInputChange} />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
