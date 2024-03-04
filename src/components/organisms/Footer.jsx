import Text from '../atoms/Text';
import { LABEL_NEXT } from '../../constants/labels';

function Footer(props) {
  const { extraClassName, onClick } = props;

  return (
    <div className={`button-box ${extraClassName || ''}`}>
      <Text className="button-text" text={LABEL_NEXT} onClick={onClick} />
    </div>
  );
}

export default Footer;
