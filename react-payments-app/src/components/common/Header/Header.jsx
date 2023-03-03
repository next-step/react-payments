const Header = ({ pageTitle, headerIcon, onClick }) => {
  return (
    <div id='header' className='page-title mt-5 mb-10'>
      {headerIcon ? (
        <div id='icon' className='cursor-pointer' onClick={onClick}>
          {headerIcon}
        </div>
      ) : (
        <div></div>
      )}
      <div>{pageTitle}</div>
      <div></div>
    </div>
  );
};

export default Header;
