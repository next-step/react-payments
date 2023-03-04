import { useNavigate } from 'react-router-dom';
import LeftArrow from '../Icon/LeftArrow';

interface HeaderProps {
  title: string;
  hasBackButton?: boolean;
}

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();
  const { title, hasBackButton } = props;

  const onClickBackButton = () => {
    navigate(-1);
  };

  return (
    <header>
      {hasBackButton && (
        <button
          type="button"
          className="header-back-button"
          onClick={onClickBackButton}
        >
          <LeftArrow />
        </button>
      )}
      <div className={`header-title ${hasBackButton ? 'has-header-back' : ''}`}>
        {title}
      </div>
    </header>
  );
};

Header.defaultProps = {
  hasBackButton: false,
};

export default Header;
