import { PATH } from './Constant';
import CardList from './pages/CardList';
import CardRegist from './pages/CardRegist';
import { Routes, Route } from 'react-router-dom';
import usePayment from './hooks/usePayment';
import CardSave from './pages/CardSave';

const Routing = () => {
  const {
    cardInfo,
    onHandleCardInfoInput,
    onHandleSave,
    onHandleSubmit,
    cardList,
    cardCompanyList,
    onHandleCompanyPopupClick,
    isShowPopup,
    onHandleResetCardInfo,
    setIsShowPopup,
  } = usePayment();

  return (
    <Routes>
      <Route path={PATH.HOME} element={<CardList cardList={cardList} />} />
      <Route
        path={PATH.REGIST}
        element={
          <CardRegist
            cardInfo={cardInfo}
            onChange={onHandleCardInfoInput}
            onSubmit={onHandleSubmit}
            cardCompanyList={cardCompanyList}
            onClickPopup={onHandleCompanyPopupClick}
            isShowPopup={isShowPopup}
            onReset={onHandleResetCardInfo}
            onShow={setIsShowPopup}
          />
        }
      />
      <Route
        path={PATH.SAVE}
        element={
          <CardSave
            onSave={onHandleSave}
            cardInfo={cardInfo}
            onChange={onHandleCardInfoInput}
          />
        }
      />
    </Routes>
  );
};

export default Routing;
