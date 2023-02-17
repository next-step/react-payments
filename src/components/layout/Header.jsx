import { GetTitle } from '../../utils/Common';

const Header = () => {
  return (
    <div className="flex-center">
      <h2 className="page-title mb-10">{GetTitle()}</h2>
    </div>
  );
};

export default Header;
