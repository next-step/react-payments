import Input from '../atoms/Input';
import Text from '../atoms/Text';
import {
  CARD_EXPIRATION_MM_DIGIT,
  CARD_EXPIRATION_YY_DIGIT,
} from '../../constants/constraints';
import {
  CARD_EXPIRATION_MM_REG_EXP,
  CARD_EXPIRATION_YY_REG_EXP,
  NUMBER_REG_EXP,
} from '../../constants/regularExpressions';
import { LABEL_EXPIRATION } from '../../constants/labels';

const expirationCheck = {
  mm: CARD_EXPIRATION_MM_REG_EXP,
  yy: CARD_EXPIRATION_YY_REG_EXP,
};

function CardExpiration(props) {
  const { onData } = props;

  const handleChange = (event, type) => {
    const { value } = event.target;
    const newValue = value.replace(NUMBER_REG_EXP, '');
    event.target.value = newValue;
    if (newValue === '' || expirationCheck[type].test(newValue)) {
      onData(type, newValue);
    }
  };

  return (
    <>
      <Text className="input-title" text={LABEL_EXPIRATION} />
      <div className="input-box w-50">
        <Input
          className="input-basic"
          type="text"
          placeholder="MM"
          onChange={(e) => handleChange(e, 'mm')}
          maxLength={CARD_EXPIRATION_MM_DIGIT}
        />
        <Input
          className="input-basic"
          type="text"
          placeholder="YY"
          onChange={(e) => handleChange(e, 'yy')}
          maxLength={CARD_EXPIRATION_YY_DIGIT}
        />
      </div>
    </>
  );
}

export default CardExpiration;
