const Header = ({ pageTitle, headerIcon }) => {
  return (
    <div className="flex-center">
      <h2 class="page-title">
        {headerIcon} {pageTitle}
      </h2>
    </div>
  );
};

export default Header;
