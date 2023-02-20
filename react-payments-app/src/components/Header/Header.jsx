const Header = ({ pageTitle, headerIcon, onClick }) => {
  return (
    <div id='header' className='page-title mb-10'>
      {headerIcon && (
        <div
          id='icon'
          className='cursor-pointer'
          onClick={(e) => {
            onClick(e);
          }}
        >
          {headerIcon}
        </div>
      )}
      <div className='flex-center ml-10'>{pageTitle}</div>
    </div>
  );
};

export default Header;
