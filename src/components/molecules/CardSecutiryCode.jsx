import Input from '../atoms/Input';
import Text from '../atoms/Text';
import { LABEL_CARD_SECURITY_CODE } from '../../constants/labels';
import { NUMBER_REG_EXP } from '../../constants/regularExpressions';
import { CARD_SECURITY_CODE_DIGIT } from '../../constants/constraints';

function CardSecurityCode(props) {
  const { onData } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    const newSecurityCode = value.replace(NUMBER_REG_EXP, '');
    event.target.value = newSecurityCode;
    onData('securityCode', newSecurityCode);
  };

  return (
    <>
      <Text className="input-title" text={LABEL_CARD_SECURITY_CODE} />
      <Input
        className="input-basic"
        extraClassName="w-25"
        type="password"
        onChange={handleChange}
        maxLength={CARD_SECURITY_CODE_DIGIT}
      />
    </>
  );
}

export default CardSecurityCode;
