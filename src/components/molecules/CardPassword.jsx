import Input from '../atoms/Input';
import Text from '../atoms/Text';
import { LABEL_CARD_PASSWORD } from '../../constants/labels';

const numberRegExp = /[^\d]/g;

function CardPassword(props) {
  const { password, onData } = props;

  const handleChange = (event, index) => {
    const { value } = event.target;
    const newValue = value.replace(numberRegExp, '');
    const newPassword = [...password];
    newPassword[index] = newValue;
    event.target.value = newValue;
    onData('password', newPassword);
  };

  return (
    <>
      <Text className="input-title" text={LABEL_CARD_PASSWORD} />
      {Array.from({ length: 2 }, (_, index) => (
        <Input
          key={index}
          className="input-basic"
          extraClassName="w-15"
          type="password"
          onChange={(e) => handleChange(e, 0)}
          maxLength={1}
        />
      ))}
      {Array.from({ length: 2 }, (_, index) => (
        <Input
          key={index}
          className="input-basic"
          extraClassName="w-15"
          type="password"
          value="*"
          readOnly
        />
      ))}
    </>
  );
}

export default CardPassword;
