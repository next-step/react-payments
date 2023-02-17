import { useLocation } from 'react-router-dom';

// 입력 받은 정보를 cardInfo로 가공하여 return
const cardInfoInit = {
  nickname: '',
  company: '',
  number: '',
  owner: '',
  expire: { month: '', year: '' },
};

export const MakeCardInfo = (inputValue) => {
  return cardInfoInit;
};

export const GetCurrentPage = () => useLocation().pathname;

export const GetTitle = () => {
  const currentPage = GetCurrentPage();

  return currentPage === '/' ? '보유카드' : '카드등록';
};

/* export const MovePage = () => {
  const navigate = useNavigate();

  navigate('/regist');
}; */
