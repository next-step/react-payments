const Header = ({ pageTitle, headerIcon }) => {
  return (
    <>
      <div id="header" className="page-title mb-10">
        <div>{headerIcon}</div>
        <div className="ml-10">{pageTitle}</div>
      </div>
    </>
  );
};

export default Header;
