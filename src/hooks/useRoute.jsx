import { PATH } from '../Constant';
import { useNavigate, useLocation } from 'react-router-dom';

const useRoute = () => {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  const movePage = (path) => {
    if (!path || !Object.values(PATH).includes(path)) {
      console.log('Invalid path');
      return false;
    }
    navigate(path);
  };

  const movePrevPage = (evt) => {
    if (currentPage !== PATH.HOME) navigate(-1);
  };

  return { movePage, movePrevPage, currentPage };
};

export default useRoute;
