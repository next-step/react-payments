import { Link } from 'react-router-dom';
import { Props } from '.';
import { BackArrow } from '../Common/Icon';

function Header({ headerTitle, goBack }: Props) {
  return (
    <h2 className="page-title flex-align-center">
      {goBack ? (
        <Link to={goBack ?? ''}>
          <BackArrow />
        </Link>
      ) : null}
      {headerTitle}
    </h2>
  );
}

export default Header;
