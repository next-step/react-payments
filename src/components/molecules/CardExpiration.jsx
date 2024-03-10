import { useEffect, useState } from 'react';
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
  const { expiration, onData } = props;
  const [newExpiration, setNewExpiration] = useState(expiration);
  const [expirationKey, setExpirationKey] = useState('mm');

  useEffect(() => {
    if (
      newExpiration[expirationKey] === '' ||
      expirationCheck[expirationKey].test(newExpiration[expirationKey])
    ) {
      onData('expiration', newExpiration);
    }
  }, [newExpiration, expirationKey]);

  const handleChange = (event, type) => {
    const { value } = event.target;
    setExpirationKey(type);
    const inputExpiration = value.replace(NUMBER_REG_EXP, '');
    setNewExpiration({ ...expiration, [type]: inputExpiration });
  };

  return (
    <>
      <Text className="input-title" text={LABEL_EXPIRATION} />
      <div className="input-box w-50">
        <Input
          className="input-basic"
          type="text"
          value={newExpiration.mm}
          placeholder="MM"
          onChange={(e) => handleChange(e, 'mm')}
          maxLength={CARD_EXPIRATION_MM_DIGIT}
        />
        <Input
          className="input-basic"
          type="text"
          value={newExpiration.yy}
          placeholder="YY"
          onChange={(e) => handleChange(e, 'yy')}
          maxLength={CARD_EXPIRATION_YY_DIGIT}
        />
      </div>
    </>
  );
}

export default CardExpiration;
