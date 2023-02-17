import LeftArrow from '../Icon/LeftArrow';

interface HeaderProps {
  title: string;
  hasBackButton?: boolean;
  backButtonPress?: () => void;
}

const Header = (props: HeaderProps) => {
  const { title, hasBackButton, backButtonPress } = props;

  return (
    <header>
      {hasBackButton && (
        <button
          type="button"
          className="header-back-button"
          onClick={backButtonPress}
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
  backButtonPress: () => {},
};

export default Header;
