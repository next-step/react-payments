import { PATH } from '../Constant';
import { useNavigate, useLocation } from 'react-router-dom';

const useRoute = () => {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  const movePage = (path) => {
    if (!path || !Object.values(PATH).includes(path)) {
      throw new Error('Invalid path');
    }
    navigate(path);
  };
  const movePrevPage = () => {
    // TODO: 엣지 케이스 처리
    if (currentPage !== PATH.HOME) navigate(-1);
  };

  return { movePage, movePrevPage, currentPage };
};

export default useRoute;
