import { useEffect, useState } from 'react';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import { LABEL_CARD_PASSWORD } from '../../constants/labels';

const numberRegExp = /[^\d]/g;

function CardPassword(props) {
  const { password, onData } = props;
  const [newPassword, setNewPassword] = useState(password);

  useEffect(() => {
    onData('password', newPassword);
  }, [newPassword]);

  const handleChange = (event, index) => {
    const { value } = event.target;
    setNewPassword(() => {
      const inputPassword = [...password];
      inputPassword[index] = value.replace(numberRegExp, '');
      return inputPassword;
    });
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
          value={newPassword[index]}
          onChange={(e) => handleChange(e, index)}
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
