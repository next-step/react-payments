import Input from '../atoms/Input';
import Text from '../atoms/Text';

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
      <Text className="input-title" text="카드 비밀번호" />
      <Input
        className="input-basic"
        extraClassName="w-15"
        type="password"
        onChange={(e) => handleChange(e, 0)}
        maxLength={1}
      />
      <Input
        className="input-basic"
        extraClassName="w-15"
        type="password"
        onChange={(e) => handleChange(e, 1)}
        maxLength={1}
      />
      <Input
        className="input-basic"
        extraClassName="w-15"
        type="password"
        value="*"
        readOnly
      />
      <Input
        className="input-basic"
        extraClassName="w-15"
        type="password"
        value="*"
        readOnly
      />
    </>
  );
}

export default CardPassword;
