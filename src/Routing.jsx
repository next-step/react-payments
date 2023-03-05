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
    handleInputChange,
    handleSave,
    handleSubmit,
    cardCompanyList,
    resetCardInfo,
    deleteCardList
  } = usePayment();

  const { movePage } = useRoute();

  return (
    <Routes>
      <Route
        path={PATH.HOME}
        element={<CardList movePage={movePage} onDelete={deleteCardList} />}
      />
      <Route
        path={PATH.REGIST}
        element={
          <CardRegist
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            cardCompanyList={cardCompanyList}
            onReset={resetCardInfo}
          />
        }
      />
      <Route
        path={PATH.SAVE}
        element={<CardSave onSave={handleSave} onChange={handleInputChange} />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
