import { PATH } from '../../Constant';
import useRoute from '../../hooks/useRoute';
import styled from 'styled-components';

const DefaultHeader = styled.header`
  .no-content-logo {
    display: none;
  }

  .page-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    display: flex;
    align-items: center;

    color: #383838;
  }

  .page-navigator {
    position: absolute;
    left: 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    cursor: pointer;

    color: #383838;
  }
`;
const getPageTitle = () => {
  const currentPage = window.location.pathname;
  switch (currentPage) {
    case PATH.HOME:
      return '보유카드';
    case PATH.REGIST:
      return '카드등록';
    case PATH.SAVE:
      return '카드 별칭 등록/수정';
    default:
      return '';
  }
};

const Header = () => {
  const { movePrevPage, currentPage } = useRoute();

  return (
    <DefaultHeader className="flex-center">
      <h1 className="no-content-logo">LOGO</h1>
      {currentPage !== PATH.HOME && (
        <div className="page-navigator" onClick={movePrevPage}>
          &lt;
        </div>
      )}
      <h2 className="page-title">{getPageTitle()}</h2>
    </DefaultHeader>
  );
};

export default Header;
