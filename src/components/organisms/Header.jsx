import Title from '../atoms/Title';
import { LABEL_ADD_CARD } from '../../constants/labels';

function Header(props) {
  const { onClick } = props;

  return <Title title={`< ${LABEL_ADD_CARD}`} onClick={onClick} />;
}

export default Header;
