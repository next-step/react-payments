import Input from '../atoms/Input';
import Text from '../atoms/Text';

const numberRegExp = /[^\d]/g;

function CardSecurityCode(props) {
  const { onData } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    const newSecurityCode = value.replace(numberRegExp, '');
    event.target.value = newSecurityCode;
    onData('securityCode', newSecurityCode);
  };

  return (
    <>
      <Text className="input-title" text="보안코드(CVC/CVV)" />
      <Input
        className="input-basic"
        extraClassName="w-25"
        type="password"
        onChange={handleChange}
        maxLength={3}
      />
    </>
  );
}

export default CardSecurityCode;
