import { PATH } from '../../Constant';
import { useNavigate, useLocation } from 'react-router-dom';

const getPageTitle = (currentPage) => {
  switch (currentPage) {
    case PATH.HOME:
      return '보유카드';
    case PATH.REGIST:
      return '카드등록';
    default:
      return '';
  }
};

const Header = () => {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  return (
    <div className="flex-center">
      {currentPage !== PATH.HOME && (
        <div className="page-navigator mb-10" onClick={() => navigate(-1)}>
          &lt;
        </div>
      )}
      <h2 className="page-title mb-10">{getPageTitle(currentPage)}</h2>
    </div>
  );
};

export default Header;
