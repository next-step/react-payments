import LeftArrow from '../Icon/LeftArrow';

interface HeaderProps {
  title: string;
  hasBackButton?: boolean;
  onClickBackbutton?: () => void;
}

const Header = (props: HeaderProps) => {
  const { title, hasBackButton, onClickBackbutton } = props;

  return (
    <header>
      {hasBackButton && (
        <button
          type="button"
          className="header-back-button"
          onClick={onClickBackbutton}
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
  onClickBackbutton: () => {},
};

export default Header;
