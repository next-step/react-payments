import { PATH } from '../../Constant';
import useRoute from '../../hooks/useRoute';

const getPageTitle = () => {
  const currentPage = window.location.pathname;

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
  const { movePrevPage, currentPage } = useRoute();

  return (
    <header className="flex-center">
      {currentPage !== PATH.HOME && (
        <div className="page-navigator mb-10" onClick={movePrevPage}>
          &lt;
        </div>
      )}
      <h2 className="page-title mb-10">{getPageTitle()}</h2>
    </header>
  );
};

export default Header;
