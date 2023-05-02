import LeftArrow from '../../Icons/LeftArrow';

interface HeaderProps {
  title: string;
  hasBackButton?: boolean;
  onClickBackButton?: () => void;
}

const Header = (props: HeaderProps) => {
  const { title, hasBackButton, onClickBackButton } = props;

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
  onClickBackButton: () => {},
};

export default Header;
