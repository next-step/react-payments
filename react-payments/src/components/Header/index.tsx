import LeftArrow from "../Icon/LeftArrow";

interface HeaderProps {
  title: string;
  hasBackButton?: boolean;
  backButtonPress: () => void;
}

const Header = (props: HeaderProps) => {
  const { title, hasBackButton, backButtonPress } = props;

  return (
    <header>
      {hasBackButton && (
        <div className="header-back" onClick={backButtonPress}>
          <LeftArrow />
        </div>
      )}
      <div className={`header-title ${hasBackButton ? "has-header-back" : ""}`}>
        {title}
      </div>
    </header>
  );
};

Header.defaultProps = {
  hasBackButton: false,
};

export default Header;
