import { PaymentsContext } from 'context/Payments';
import { useContext } from 'react';
import useRouter from 'routes/useRouter';

const useMyCardListPage = () => {
  const { push } = useRouter();
  const payMentsCtx = useContext(PaymentsContext);
  const myCardList = [...payMentsCtx.cardList].reverse();

  return { push, myCardList };
};

export default useMyCardListPage;
